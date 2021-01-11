Page({
    data: {
        androidDialog1: false,
        start: '开始',
        flag: 1,
        food: '想想吧',
        foodList: [
            '景仁馅饼',
            '过桥米线',
            '麻辣烫',
            '小馄饨',
            '金汤肥牛米粉',
            '肉末米粉',
            '烤肉拌饭',
            '酸辣粉'
        ],
        timer: null,
        foodName: '',
        menu: false
    },
    btnEvent(event) {
        var that = this;
        var num = that.data.foodList.length;
        var i = 0;
        if (this.data.flag === 1) {
            that.setData({ start: '停止' });
            that.timer = setInterval(
                () => {
                    let nowFood = that.data.foodList[i];
                    that.setData({
                        food: nowFood ? nowFood : null
                    });
                    i = (i + 1) % num;
                    console.log(i);
                }, 100)
        }
        if (this.data.flag === 0) {
            console.log(0);
            clearInterval(that.timer)
            that.setData({ start: '开始' })
            this.openAndroid1()
        }
        let nowFlag = this.data.flag === 0 ? 1 : 0
        this.setData({
            flag: nowFlag
        })
    },
    openAndroid1: function() {
        this.setData({
            androidDialog1: true
        });
    },
    close: function() {
        this.setData({
            androidDialog1: false
        })
    },
    foodInput: function(e) {
        this.setData({
            foodName: e.detail.value
        })
    },
    addFood: function() {
        this.setData({
            menu: true
        })
    },
    addIt: function(e) {
        let arr = this.data.foodList.concat(this.data.foodName)
        this.setData({
            foodList: arr,
            menu: false
        })

    }
})