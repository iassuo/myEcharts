(function() {
    // 克隆 marquee 里所有的 row
    $('.marquee-view .marquee').each(function() {
        console.log($(this));
        console.log(111)
        var rows = $(this).children().clone();
        $(this).append(rows);
    });
})();
// 进场机构top5模块
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector('.top5'));
    // 指定配置和数据
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: '10%',
            left: '3%',
            right: '3%',
            bottom: '3%',
            containLabel: true
        },
        legend: {
            textStyle: {
                fontSize: 12, //字体大小
                // color: () => {} //字体颜色
            },
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLine: {
                lineStyle: {
                    color: "#315070",
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#315070']
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ccc',
                    //更改坐标轴文字颜色
                    fontSize: 12 //更改坐标轴文字大小
                }
            },
        },
        yAxis: {
            type: 'category',
            data: ['巴西', '印尼', '美国', '印度', '中国'],
            axisLine: {
                lineStyle: {
                    // color: "#315070"
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    // color: ['#315070']
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    // color: (params) => {
                    //     var colorList = ['#04EFFC', '#0445D7', '#FDD34C', '#FEA8FD', '#7C4CC9'];
                    //     return colorList[params.dataIndex];
                    // },
                    //更改坐标轴文字颜色
                    fontSize: 12 //更改坐标轴文字大小
                }
            },
        },
        series: [{
            itemStyle: {
                normal: {
                    label: {
                        show: false, // 显示隐藏柱状图个体数值
                        position: 'top',
                        color: '# fff '
                    },
                    color: function(params) {
                        var colorList = ['#01FF06', '#FD637B', '#04EFFC', '#0445D7', '#FDD34C', '#FEA8FD', '#7C4CC9'];
                        return colorList[params.dataIndex];
                    }
                }
            },
            // name: '2011年',
            type: 'bar',
            // 柱状图位置
            center: ['30%', '30%'],
            barWidth: 12,
            data: [18203, 23489, 29034, 104970, 131744]
        }]
    };
    // 把配置给实例对象
    myChart.setOption(option);
})();
// 饼状图模块
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector('.pie'));
    // 指定配置和数据
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        grid: {
            top: '3%',
            left: '3%',
            right: '3%',
            bottom: '3%',
            containLabel: false
        },
        legend: {
            orient: 'vertical',
            left: 10,
            data: ['直达', '营销广告', '搜索引擎', '邮件营销', '谷歌'],
            left: 180,
            top: 10,
            textStyle: {
                fontSize: 12, //字体大小
                color: () => {} //字体颜色
            },
        },
        series: [{
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '65%'],
            // 饼状图位置
            center: ['30%', '50%'],
            label: {
                position: 'inner',
                textStyle: {
                    fontSize: 10
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 450, name: '直达' },
                { value: 679, name: '营销广告' },
                { value: 1548, name: '搜索引擎' },
                { value: 360, name: '邮件营销' },
                { value: 1200, name: '谷歌', selected: true }
            ]
        }, ]
    };
    // 把配置给实例对象
    myChart.setOption(option);
})();
/* 各市数据统计分析模块 */
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector('.bar'));
    // 指定配置和数据
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '12%',
            containLabel: false
        },
        xAxis: [{
            type: 'category',
            data: ['银川市', '石嘴山市', '吴中市', '固原市', '中卫市', '灵武市', '青铜峡市'],
            axisTick: {
                alignWithLabel: true
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff', //更改坐标轴颜色
                }
            }
        }],
        yAxis: [{
            type: 'value',
            show: false,
            splitLine: {
                show: false
            },
        }],
        series: [{
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        color: '#fff'
                    },
                    color: function(params) {
                        var colorList = ['#01FF06', '#FD637B', '#04EFFC', '#0445D7', '#FDD34C', '#FEA8FD', '#7C4CC9'];
                        return colorList[params.dataIndex];
                    }
                }
            },
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [39433, 19433, 29433, 39433, 19433, 29433, 30000]
        }]
    };
    // 把配置给实例对象
    myChart.setOption(option);
})();
// 合作方式分析模块
(function() {
    // 实例化对象
    var myChart = echarts.init(document.querySelector('.spider'));
    // 指定配置和数据
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            top: '3%',
            left: '3%',
            right: '3%',
            bottom: '3%',
            containLabel: false
        },
        radar: [{
            indicator: [
                { text: '技术转让', max: 100 },
                { text: '技术授权', max: 100 },
                { text: '技术融资', max: 100 },
                { text: '技术许可', max: 100 },
                { text: '技术服务', max: 100 }
            ],
            // 柱状图大小
            radius: 60,
            // 雷达图位置
            center: ['50%', '55%'],
        }],
        series: [{
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            areaStyle: {},
            data: [{
                    value: [60, 73, 85, 40, 20],
                    name: '数据1'
                },
                {
                    value: [20, 30, 40, 50, 60],
                    name: '数据2'
                },
            ]
        }]
    };

    // 把配置给实例对象
    myChart.setOption(option);
})();