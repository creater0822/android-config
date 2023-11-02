##########################################################################################
## --------------------------------------- README ---------------------------------------
# 1. Follow the instructions to install fdroidcl: https://github.com/mvdan/fdroidcl
# 2. Add some additional F-Droid repositories, like using mine > ./fdroidRepo.ps1
# 3. On your Android device: Enable "Developer options" > "USB Debugging"
# 4. Connect your Android device through a USB cable
# 5. Execute my PS script from PowerShell 7 > ./InstallApps.ps1 ./fdroidApps.txt
# 
## ------------------------------------- The Syntax -------------------------------------
# * Lines that are empty or start with # are skipped from evaluation 
# * Lines that describe apps that must be installed start with the package name
# * Directly adding ; after a package name allows comments (namely for the app name) 
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
