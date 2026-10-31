$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$categories = @('buku-agenda-custom', 'pulpen-custom', 'tumbler-custom', 'kipas-mini-custom', 'flazz-e-money-custom', 'tote-bag-custom', 'payung-custom', 'korek-api-custom')
$destination = Join-Path $PSScriptRoot '../docs/catalog-source'
New-Item -ItemType Directory -Force -Path $destination | Out-Null
$records = foreach ($category in $categories) {
    $url = "https://starpromosindo.com/$category/"
    $page = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 45
    $images = foreach ($tag in [regex]::Matches($page.Content, '<img\b[^>]*>', 'IgnoreCase')) {
        $src = [regex]::Match($tag.Value, '\bsrc="([^"]+)"').Groups[1].Value
        $alt = [regex]::Match($tag.Value, '\balt="([^"]*)"').Groups[1].Value
        if ($src -match '/wp-content/uploads/' -and $src -notmatch 'logo|Logo') {
            [pscustomobject]@{ url = [Net.WebUtility]::HtmlDecode($src); alt = [Net.WebUtility]::HtmlDecode($alt) }
        }
    }
    $text = [regex]::Replace($page.Content, '<(script|style)\b[^>]*>[\s\S]*?</\1>', '', 'IgnoreCase')
    $text = [Net.WebUtility]::HtmlDecode([regex]::Replace($text, '<[^>]+>', ' '))
    $text = [regex]::Replace($text, '\s+', ' ').Trim()
    [pscustomobject]@{ category = $category; source = $url; images = @($images | Sort-Object url -Unique); text = $text }
    Write-Host "Read $category ($(@($images).Count) images)"
}
$records | ConvertTo-Json -Depth 5 | Set-Content -LiteralPath (Join-Path $destination 'starpromosindo-inventory.json') -Encoding UTF8
$records | ForEach-Object { $_.category; $_.images | Format-Table -Wrap }
