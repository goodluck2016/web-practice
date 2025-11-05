// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const toggleButton = document.getElementById('toggleButton');
    const currentMode = document.getElementById('currentMode');
    const moonIcon = document.getElementById('moonIcon');
    const body = document.body;
    
    // 定义背景颜色状态变量，默认从暗色模式开始
    let isDarkMode = true;
    
    // 设置初始状态
    function setInitialState() {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            currentMode.textContent = '当前模式：夜间模式';
            // 确保文字颜色正确设置
            currentMode.style.color = 'white';
            // 确保月亮图标颜色正确 - 保持渐变效果
            const moonSvg = moonIcon.querySelector('svg path');
            if (moonSvg) {
                moonSvg.setAttribute('fill', 'url(#moonGradient)'); // 使用渐变
            }
        } else {
            body.classList.remove('dark-mode');
            currentMode.textContent = '当前模式：日间模式';
            currentMode.style.color = 'black';
            // 确保月亮图标颜色正确 - 设置为灰色
            const moonSvg = moonIcon.querySelector('svg path');
            if (moonSvg) {
                moonSvg.setAttribute('fill', '#a0a0a0'); // 灰色月亮
            }
        }
    }
    
    // 初始化页面状态
    setInitialState();
    
    // 添加点击事件监听器
    toggleButton.addEventListener('click', function() {
        // 添加过渡动画
        body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
        moonIcon.style.transition = 'transform 0.5s ease, filter 0.5s ease';
        currentMode.style.transition = 'opacity 0.3s ease, color 0.5s ease';
        
        // 切换状态
        isDarkMode = !isDarkMode;
        
        // 更新文本显示
        currentMode.style.opacity = '0';
        setTimeout(() => {
            if (isDarkMode) {
                body.classList.add('dark-mode');
                currentMode.textContent = '当前模式：夜间模式';
                currentMode.style.color = 'white';
                
                // 旋转月亮图标
                moonIcon.style.transform = 'rotate(360deg)';
                const moonSvg = moonIcon.querySelector('svg path');
                if (moonSvg) {
                    moonSvg.setAttribute('fill', 'url(#moonGradient)'); // 使用渐变
                }
            } else {
                body.classList.remove('dark-mode');
                currentMode.textContent = '当前模式：日间模式';
                currentMode.style.color = 'black';
                
                // 旋转月亮图标
                moonIcon.style.transform = 'rotate(-360deg)';
                const moonSvg = moonIcon.querySelector('svg path');
                if (moonSvg) {
                    moonSvg.setAttribute('fill', '#a0a0a0'); // 灰色月亮
                }
            }
            currentMode.style.opacity = '1';
        }, 300);
        
        // 按钮动画
        toggleButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            toggleButton.style.transform = 'scale(1)';
        }, 200);
    });
});