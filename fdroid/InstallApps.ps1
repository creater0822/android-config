##########################################################################################
## --------------------------------------- README ---------------------------------------
# 1. Maintain your own list of F-Droid apps, example: `/fdroid/fdroidApps.txt`
#   - Write down your list of custom repositories for your own convenience, like this: `/fdroid/fdroidRepo.ps1`
# 2. From your Android device: Enable "Developer options" > "USB Debugging", then connect to your PC/laptop through USB cable.
# 3. Execute from PowerShell 7: ./InstallApps.ps1 ./fdroidApps.txt
##########################################################################################
$FilePath = $args[0] # Acquire and check execution parameter
if ($null -eq $FilePath) {
    Write-Host "Fill in the file path, like: ./InstallApps.ps1 ./fdroidApps.txt"
    exit
}

$Content = Get-Content -Path $FilePath | # Read text file
    # Skip all empty lines or comment-lines that start with '#'
    Where-Object { -not([string]::isnullorempty($_.trim()) -or $_.SubString(0, 1) -Like "#") }
$FileLen = $($Content.Count)
Write-Host "List contains $FileLen apps."

Write-Host "First we're going to update our repos."
fdroidcl update

$i = 1
ForEach ($Line in $Content) {
    Write-Host "App# $i/$FileLen :" $Line.split(';')[1]
    fdroidcl install $Line.split(';')[0]
    $i++
}
Write-Host "The script has finished running."
