requirejs.config({
    //默认情况下模块所在目录为js/lib
    baseUrl: '/static/',
    waitSeconds:10,
    paths: {
        // app: '../app'
    }
});

require(['lib/js/bootstrap','entry/js/login'], function(core,j){
});

