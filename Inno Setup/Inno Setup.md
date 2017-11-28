Inno Setup
-----------------

```
; 脚本由 Inno Setup 脚本向导 生成！
; 有关创建 Inno Setup 脚本文件的详细资料请查阅帮助文档！

#define MyAppName "mDesigner"
#define MyAppVersion "1.3.3"
#define MyAppPublisher "Microduino"
#define MyAppURL "http://www.microduino.cn/"
#define MyAppExeName "mDesigner.exe"

[Setup]
; 注: AppId的值为单独标识该应用程序。
; 不要为其他安装程序使用相同的AppId值。
; (生成新的GUID，点击 工具|在IDE中生成GUID。)
AppId={{500FAF5D-CFF6-4699-BE5E-E0E3AE2D545D}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
;AppVerName={#MyAppName} {#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={pf}\{#MyAppName}
DisableProgramGroupPage=yes
OutputDir=C:\2017
OutputBaseFilename=mDesigner
SetupIconFile=C:\mDesigner\ico_16X16.ico
Compression=lzma
SolidCompression=yes

[Languages]
Name: "chinesesimp"; MessagesFile: "compiler:Default.isl"
Name: "english"; MessagesFile: "compiler:Languages\English.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked; OnlyBelowVersion: 0,6.1

[Files]
Source: "C:\mDesigner\mDesigner.exe"; DestDir: "{app}"; Flags: ignoreversion
Source: "C:\mDesigner\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs
; 注意: 不要在任何共享系统文件上使用“Flags: ignoreversion”

[Icons]
Name: "{commonprograms}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"
Name: "{commondesktop}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; Tasks: desktopicon

[Run]
Filename: "{app}\{#MyAppExeName}"; Description: "{cm:LaunchProgram,{#StringChange(MyAppName, '&', '&&')}}"; Flags: nowait postinstall skipifsilent
Filename: "{app}\driver\dpinst-x86.exe"; Description: "安装x86驱动"; StatusMsg: "X86 Driver is setuping."; Check: "not IsWin64";
Filename: "{app}\driver\dpinst-amd64.exe"; Description: "安装x64驱动"; StatusMsg: "X64 Driver is setuping."; Check: IsWin64;


```
