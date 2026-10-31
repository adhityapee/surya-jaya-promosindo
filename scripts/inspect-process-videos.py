"""Inspect client footage and extract contact sheets for editorial review."""
from pathlib import Path
import json
import subprocess
from PIL import Image, ImageDraw
import imageio_ffmpeg

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'docs/new-assets'
OUT = ROOT / '.pwc/process-video'
OUT.mkdir(parents=True, exist_ok=True)
ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
videos=[]
for source in sorted(SOURCE.glob('*.mp4')):
    reader = imageio_ffmpeg.read_frames(str(source))
    info=next(reader)
    reader.close()
    times=[round(info['duration']*fraction,2) for fraction in [0.12,0.35,0.60,0.82]]
    frames=[]
    for i,time in enumerate(times):
        frame=OUT/f'{source.stem}-{i}.jpg'
        subprocess.run([ffmpeg,'-hide_banner','-loglevel','error','-y','-ss',str(time),'-i',str(source),'-frames:v','1','-vf','scale=600:600:force_original_aspect_ratio=decrease','-q:v','3',str(frame)],check=True)
        image=Image.open(frame).convert('RGB')
        image.thumbnail((390,450))
        frames.append(image)
    sheet=Image.new('RGB',(1600,510),'#ededed')
    draw=ImageDraw.Draw(sheet)
    draw.text((12,5),f'{source.name} | {info["size"]} | {info["duration"]:.2f}s | {info["fps"]} fps',fill='black')
    for i,image in enumerate(frames):
        x=i*400+(400-image.width)//2
        sheet.paste(image,(x,42))
        draw.text((i*400+12,25),f'{times[i]}s',fill='black')
    sheet.save(OUT/f'{source.stem}-sheet.jpg')
    videos.append(dict(file=source.name,**info))
    print(source.name,json.dumps(info))
(OUT/'metadata.json').write_text(json.dumps(videos,indent=2),encoding='utf-8')
