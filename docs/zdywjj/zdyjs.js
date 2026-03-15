(function() {
    const cleanUpLayout = () => {
        const h = document.querySelector('#header');
        if (!h) {
            // 如果页面还没加载完，循环检查
            setTimeout(cleanUpLayout, 300);
            return;
        }

        // 1. 移除自定义按钮（如果之前存在）
        const oldBtns = document.getElementById('win-btn-group');
        if (oldBtns) oldBtns.remove();

        // 2. 移除背景桌面图标
        const oldIcons = document.getElementById('my-desktop-icons');
        if (oldIcons) oldIcons.remove();

        console.log("UI Cleaned: Simulation buttons and icons removed.");
    };

    // 确保在页面渲染后执行
    if (document.readyState === 'complete') cleanUpLayout();
    else window.addEventListener('load', cleanUpLayout);
})();
