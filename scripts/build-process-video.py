"""Build the homepage review reel from client footage; originals stay untouched."""
from pathlib import Path
import json
import subprocess
import imageio_ffmpeg

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "docs/new-assets"
WORK = ROOT / ".pwc/process-video/edit"
OUTPUT = ROOT / "public/assets/videos/sjp-proses-cetak-uv-v1.mp4"
POSTER = ROOT / "public/assets/images/sjp-proses-cetak-uv.webp"
WORK.mkdir(parents=True, exist_ok=True)
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
POSTER.parent.mkdir(parents=True, exist_ok=True)
FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()

# filename, in point, duration, editorial purpose. All times in seconds.
SHOTS = [
    ("VID-20261027-WA0004.mp4", 12, 5, "Cetak UV pada pulpen"),
    ("VID-20261027-WA0005.mp4", 14, 5, "Cetak UV pada kartu"),
    ("VID-20261002-WA0011.mp4", 14, 4, "Cetak pada tumbler hitam"),
    ("VID-20261031-WA0008.mp4", 17, 4, "Proses cetak tumbler krem"),
    ("VID-20261031-WA0008.mp4", 23, 3, "Hasil cetak tumbler krem"),
    ("VID-20261031-WA0009.mp4", 17, 4, "Proses cetak tumbler merah"),
    ("VID-20261031-WA0009.mp4", 24, 3, "Detail hasil cetak"),
    ("VID-20261031-WA0014.mp4", 3, 4, "Penutup: tumbler kuning selesai dicetak"),
]

def run(args):
    subprocess.run([FFMPEG, "-hide_banner", "-loglevel", "error", "-y", *args], check=True)

parts = []
for index, (filename, start, duration, description) in enumerate(SHOTS):
    part = WORK / f"shot-{index:02}.mp4"
    filters = "scale=576:1024:force_original_aspect_ratio=decrease,pad=576:1024:(ow-iw)/2:(oh-ih)/2,setsar=1,fps=30"
    if index == 0:
        filters += ",fade=t=in:st=0:d=0.25"
    if index == len(SHOTS) - 1:
        filters += f",fade=t=out:st={duration-0.25}:d=0.25"
    run(["-ss", str(start), "-i", str(SOURCE / filename), "-t", str(duration), "-an", "-vf", filters,
         "-c:v", "libx264", "-preset", "medium", "-crf", "23", "-pix_fmt", "yuv420p", str(part)])
    parts.append(f"file '{part.as_posix()}'")
    print(f"Prepared {index+1}/{len(SHOTS)}: {description}", flush=True)

playlist = WORK / "concat.txt"
playlist.write_text("\n".join(parts), encoding="utf-8")
run(["-f", "concat", "-safe", "0", "-i", str(playlist), "-c", "copy", "-movflags", "+faststart", str(OUTPUT)])
run(["-ss", "20", "-i", str(OUTPUT), "-frames:v", "1", "-c:v", "libwebp", "-quality", "85", str(POSTER)])
print(json.dumps({"output": str(OUTPUT), "duration_seconds": sum(s[2] for s in SHOTS), "bytes": OUTPUT.stat().st_size}))
