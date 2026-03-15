/* 1. 颜色变量 */
:root {--bg-main: #f0f2f5; --win-bg: #ffffff; --win-border: #999; --header-bg: #dee1e6; --text-p: #333;}
[data-color-mode='dark'] {--bg-main: #0d1117; --win-bg: #161b22; --win-border: #444; --header-bg: #30363d; --text-p: #adbac7;}

/* 2. 全局容器：统一 97% 宽度并居中 */
html, body, #main, .Gmeek-mainindex {
    background: var(--bg-main)!important; 
    margin: 0 auto!important; 
    height: auto!important; 
    min-height: 100vh!important; 
    display: block!important;
    max-width: 97% !important; 
}

/* 3. 模拟窗口头部：高度自适应 + 右侧预留空隙 */
#header {
    display: block!important; 
    width: 100%!important; 
    min-height: 44px!important; 
    height: auto!important; 
    margin: 45px auto 0 auto!important; 
    background: var(--header-bg)!important; 
    border: 1px solid var(--win-border)!important; 
    border-radius: 8px 8px 0 0!important; 
    padding: 10px 95px 10px 15px!important; /* 右侧 95px 为按钮禁区 */
    box-sizing: border-box!important; 
    position: relative!important; 
    z-index: 1001!important;
}

/* 4. 标题样式：自适应字号 + 自动换行 */
.blogTitle, .postTitle {
    display: block!important; 
    font-size: clamp(14px, 3.8vw, 17px)!important; /* 手机端自动缩小 */
    color: var(--text-p)!important; 
    font-weight: bold!important;
    white-space: normal!important; 
    word-break: break-all!important; 
    line-height: 1.3!important;
    margin: 0!important;
    text-align: left!important;
}

/* 5. 按钮组：固定在右上角，不随标题移动 */
.title-right {
    position: absolute!important; 
    right: 10px!important; 
    top: 10px!important; 
    display: flex!important; 
    gap: 5px!important;
}

/* 6. 主体内容与页脚：全站统一适配 */
#content, .main, .list-content {
    display: block!important; 
    width: 100%!important; 
    margin: 0 auto!important; 
    background: var(--win-bg)!important; 
    border-left: 1px solid var(--win-border)!important; 
    border-right: 1px solid var(--win-border)!important; 
    padding: 20px!important; 
    box-sizing: border-box!important;
    min-height: calc(100vh - 200px)!important;
}

#footer {
    display: block!important; 
    width: 100%!important; 
    margin: 0 auto 60px auto!important; 
    background: var(--win-bg)!important; 
    border: 1px solid var(--win-border)!important; 
    border-top: none!important; 
    border-radius: 0 0 8px 8px!important; 
    padding: 20px!important; 
    box-sizing: border-box!important;
}

/* 7. 原生组件清理 */
.subTitle, .SideNav-icon, .title-right .btn-octicon:first-child {display: none!important;}
.avatar {width: 46px!important; height: 46px!important; margin-right: 12px!important; margin-top: -20px!important; border: 2px solid var(--win-border)!important; background: var(--win-bg)!important; border-radius: 8px!important; z-index: 1002!important; box-shadow: 0 4px 8px rgba(0,0,0,0.2)!important;}
