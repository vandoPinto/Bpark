$(function () {
    $("#timePicker, #timePicker2").timepicker({
        timeFormat: 'h:i',
        interval: 30,
        scrollbar: true,
        dynamic: true
    });
    $("#datepicker, #datepicker2").datepicker();

    $('#menu-toggle').click(function (e) {
        e.stopPropagation(); // Evita que o evento de clique seja propagado para o documento
        $('.nav-menu').toggleClass('active');
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.nav-menu').length && !$(e.target).is('.menu-hamburger')) {
            $('.nav-menu').removeClass('active');
        }
    });

    function carrocel(container, filhos, avancar, voltar, mostrarTudo = false) {
        var features = $(`${container} ${filhos}`);
        var currentIndex = 0;
        var totalFeatures = features.length;
        var displayLimit = 3;

        // Função para mostrar o número apropriado de features com base no tamanho da tela
        function updateDisplay() {
            if ($(window).width() <= 900) {
                displayLimit = 1;
            } else {
                displayLimit = 3;
            }
            features.hide();
            features.slice(currentIndex, currentIndex + displayLimit).show();
        }

        // Inicializar a exibição
        updateDisplay();

        // Avançar para as próximas features
        $(`${avancar}`).click(function () {
            if (currentIndex + displayLimit < totalFeatures) {
                features.hide();
                currentIndex += displayLimit;
                features.slice(currentIndex, currentIndex + displayLimit).show();
            }
        });

        // Voltar para as features anteriores
        $(`${voltar}`).click(function () {
            if (currentIndex - displayLimit >= 0) {
                features.hide();
                currentIndex -= displayLimit;
                features.slice(currentIndex, currentIndex + displayLimit).show();
            }
        });

        // Atualizar a exibição quando o tamanho da tela mudar
        $(window).resize(function () {
            updateDisplay();
        });

    }

    carrocel('#features', '.feature', '#nextArrow', '#prevArrow');
    carrocel('#features-tarifa', '.feature-tarifa', '#nextArrow-tarifa', '#prevArrow-tarifa');

});