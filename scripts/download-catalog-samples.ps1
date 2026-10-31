$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$root = Join-Path $PSScriptRoot '../docs/catalog-source/originals'
New-Item -ItemType Directory -Force -Path $root | Out-Null
$files = @{
    'pulpen-custom.webp' = '13.webp'
    'pulpen-promosi.webp' = '14.webp'
    'tumbler-custom.webp' = '21.webp'
    'agenda-custom.jpg' = 'buku-agenda-by-starpromosindo-1.jpg'
    'kipas-mini.webp' = 'kipas-mini-custom.webp'
    'kartu-elektronik.webp' = 'starpromosindo-3.webp'
    'tote-bag.webp' = '79-1.webp'
    'payung.webp' = '42.webp'
    'korek-api.webp' = 'starpromosindo-1.webp'
}
foreach ($entry in $files.GetEnumerator()) {
    Invoke-WebRequest -Uri ('https://starpromosindo.com/wp-content/uploads/2026/05/' + $entry.Value) -UseBasicParsing -TimeoutSec 45 -OutFile (Join-Path $root $entry.Key)
    Write-Host ('Saved ' + $entry.Key)
}
