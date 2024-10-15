<script>
    function switchLanguage(lang) {
        if (lang === 'en') {
            document.getElementById('switchLang').innerText = '中文';
            document.title = 'Beijing Yuyi Technology Development Co., Ltd.';
            document.querySelector('meta[name="description"]').setAttribute('content', 'Beijing Yuyi Technology Development Co., Ltd. is committed to promoting and applying technology services, providing comprehensive technical support and services.');
        } else {
            document.getElementById('switchLang').innerText = 'English';
            document.title = 'Beijing Yuyi Technology Development Co., Ltd. - Technical Services and Innovation';
            document.querySelector('meta[name="description"]').setAttribute('content', '北京愉佚科技发展有限公司致力于科技推广和应用服务业，提供全面的技术支持和服务。');
        }
    }

    // 初始化默认语言
    switchLanguage('zh');
</script>
