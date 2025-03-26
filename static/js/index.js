

// Toggle the sider panel visibility
function toggleSider() {
    $('#siderPanel').toggleClass('nav-sider--visible');

    // Optional: Close when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.nav-sider, .nav-icon').length) {
            $('#siderPanel').removeClass('nav-sider--visible');
        }
    });
}

// Original Sider function (show/hide with explicit control)
function Sider(action) {
    if (action === 'show') {
        $('#siderPanel').addClass('nav-sider--visible');
    } else if (action === 'hide') {
        $('#siderPanel').removeClass('nav-sider--visible');
    } else {
        // If no action specified, toggle
        toggleSider();
    }
}