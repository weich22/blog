(function() {
    const restoreLayout = () => {
        const h = document.querySelector('#header');
        const c = document.querySelector('#content') || document.querySelector('.main');
        
        if (h && c) {
            // 将标题栏移动到内容区的前面，方便 CSS 统一排版
            c.parentNode.insertBefore(h, c);
            
            // 清理掉任何之前残留的按钮逻辑
            const oldBtns = document.querySelectorAll('[id*="win-btn"], [id*="mock-btn"]');
            oldBtns.forEach(el => el.remove());
        } else {
            setTimeout(restoreLayout, 300);
        }
    };

    if (document.readyState === 'complete') restoreLayout();
    else window.addEventListener('load', restoreLayout);
})();
