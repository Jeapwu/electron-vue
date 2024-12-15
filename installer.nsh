; 引入 NSIS Modern User Interface 模块
!include "MUI2.nsh"

; 安装程序基础信息
; OutFile "electron-vue-v1.0.0-win-x64.exe"                   ; 输出的安装程序文件名
InstallDir "$PROGRAMFILES\electron-vue"           ; 默认安装路径
InstallDirRegKey HKCU "Software\electron-vue" "InstallPath" ; 支持记忆上次安装路径
SetCompress auto                            ; 自动选择最佳压缩方式
SetCompressor /SOLID lzma                   ; 使用 lzma 压缩算法，优化体积



; 安装卸载页面定义
!insertmacro MUI_PAGE_WELCOME               ; 欢迎页面
!insertmacro MUI_PAGE_DIRECTORY             ; 选择安装目录页面
!insertmacro MUI_PAGE_INSTFILES             ; 安装进度页面
!insertmacro MUI_PAGE_FINISH                ; 安装完成页面

!insertmacro MUI_UNPAGE_CONFIRM             ; 卸载确认页面
!insertmacro MUI_UNPAGE_INSTFILES           ; 卸载进度页面

;!insertmacro MUI_LANGUAGE "English"         ; 设置语言（放在页面定义之后）

; 安装逻辑
Section "Install Files"                     ; 安装文件的主要逻辑
  SetOutPath "$INSTDIR"                     ; 设置目标安装目录
  File /r "C:\Users\jack\Desktop\electron-vue\dist\win-unpacked\*" ; 复制应用文件到目标路径
  
  ; 创建快捷方式
  CreateShortcut "$DESKTOP\electron-vue.lnk" "$INSTDIR\electron-vue.exe" ; 创建桌面快捷方式
  CreateDirectory "$SMPROGRAMS\electron-vue"                      ; 创建开始菜单目录
  CreateShortcut "$SMPROGRAMS\electron-vue\electron-vue.lnk" "$INSTDIR\electron-vue.exe" ; 创建开始菜单快捷方式

  ; 记录安装路径到注册表
  WriteRegStr HKCU "Software\electron-vue" "InstallPath" "$INSTDIR"
SectionEnd

; 卸载逻辑
Section "Uninstall"
  ; 删除应用文件和快捷方式
  Delete "$DESKTOP\electron-vue.lnk"               ; 删除桌面快捷方式
  Delete "$SMPROGRAMS\electron-vue\electron-vue.lnk"      ; 删除开始菜单快捷方式
  RMDir "$SMPROGRAMS\electron-vue"                 ; 删除开始菜单目录
  RMDir /r "$INSTDIR"                       ; 删除安装目录及所有内容

  ; 删除注册表记录
  DeleteRegKey HKCU "Software\electron-vue"
SectionEnd
