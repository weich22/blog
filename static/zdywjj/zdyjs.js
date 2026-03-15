(function() {
    const fixLayout = () => {
        const h = document.querySelector('#header');
        const c = document.querySelector('#content') || document.querySelector('.main');
        
        if (h && c) {
            // 将标题栏移动到内容区同级，方便 CSS 绝对定位吸附
            c.parentNode.insertBefore(h, c);
            
            // 彻底移除之前可能产生的任何自定义按钮组
            const customBtns = document.querySelectorAll('[id*="win-btn"], [id*="mock-btn"]');
            customBtns.forEach(el => el.remove());

            console.log("Layout fixed: Window style applied, custom buttons removed.");
        } else {
            setTimeout(fixLayout, 300);
        }
    };

    if (document.readyState === 'complete') fixLayout();
    else window.addEventListener('load', fixLayout);
})();
