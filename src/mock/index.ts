import Mock from "mockjs";
Mock.setup({
    timeout:"200-600" //设置延迟时间
})
//管理员权限菜单
const menulist = [
    {
      name: "数据看板",
      url: "/dashboard",
      icon: "DataLine"
    },
    {
      name: "充电站管理",
      url: "/chargingstation",
      icon: "Lightning",
      children: [
        {
          name: "充电站监控",
          url: "/chargingstation/monitor",
          icon: "VideoCamera"
        },
        {
          name: "营收统计",
          url: "/chargingstation/revenue",
          icon: "DataAnalysis"
        },
        {
          name: "充电桩管理",
          url: "/chargingstation/fault",
          icon: "Warning"
        }
      ]
    },
    {
      name: "电子地图",
      url: "/map",
      icon: "MapLocation"
    },
    {
      name: "运营管理",
      url: "/operations",
      icon: "Files",
      children: [
        {
          name: "订单管理",
          url: "/operations/orders",
          icon: "DocumentCopy",
        },
        {
          name: "订单详情",
          url: "/operations/detail",
          icon: "Share"
        },
        {
          name: "计费管理",
          url: "/operations/total",
          icon: "Money"
        },
      ]
    },
    {
      name: "报警管理",
      url: "/alarm",
      icon: "Phone"
    },
    {
      name: "会员卡管理",
      url: "/equipment",
      icon: "Magnet"
    },
    {
      name: "招商管理",
      url: "/document",
      icon: "Document"
    },
    {
      name: "系统设置",
      url: "/system",
      icon: "Setting"
    },
  
    {
      name: "个人中心",
      url: "/personal",
      icon: "User"
    },
]
//运营专员的菜单
const menulist2 = [
    {
      name: "数据看板",
      url: "/dashboard",
      icon: "DataLine"
    },
    {
      name: "充电站管理",
      url: "/chargingstation",
      icon: "Lightning",
      children: [
        {
          name: "充电站监控",
          url: "/chargingstation/monitor",
          icon: "VideoCamera"
        },
        {
          name: "营收统计",
          url: "/chargingstation/revenue",
          icon: "DataAnalysis"
        },
        {
          name: "充电桩管理",
          url: "/chargingstation/fault",
          icon: "Warning"
        }
      ]
    },
    {
      name: "电子地图",
      url: "/map",
      icon: "MapLocation"
    },
    {
      name: "运营管理",
      url: "/operations",
      icon: "Files",
      children: [
        {
          name: "订单管理",
          url: "/operations/orders",
          icon: "DocumentCopy",
        },
        {
          name: "订单详情",
          url: "/operations/detail",
          icon: "Share"
        },
        {
          name: "计费管理",
          url: "/operations/total",
          icon: "Money"
        },
      ]
    },
    {
      name: "报警管理",
      url: "/alarm",
      icon: "Phone"
    },
    {
      name: "会员卡管理",
      url: "/equipment",
      icon: "Magnet"
    },  
    {
      name: "个人中心",
      url: "/personal",
      icon: "User"
    },
]
//登录接口
Mock.mock("https://www.demo.com/login","post",(options:any)=>{
    const {username,password}= JSON.parse(options.body) ;
    if(username==="admin"&&password==="123456"){
        return {
            code:200,
            message:"登陆成功",
            data:{
                token:"admintokenkkljbuo2w9xla2",
                user:{
                    username:"运营专员",
                    roles:["admin"],
                },
                menulist
            }
        }
    }else if(username==="user"&&password==="123456"){
        return {
            code:200,
            message:"登陆成功",
            data:{
                token:"usertokenkkljbuo2w9xla2",
                user:{
                    username:"网站用户",
                    roles:["user"]
                },
                menulist:menulist2
            }
        }
    }else{
        return {
            code:401,
            message:"用户名或者密码有误"
        }
    } 
})

//echart图表接口 折线图
Mock.mock("https://www.demo.com/chartData","get",()=>{
  return {
    code:200,
    message:"操作成功",
    data:{
      list:[
        {name:"充电量",data:[20, 50, 30, 70, 60, 80, 40, 60, 50]},
        {name:"充电时长",data:[40, 60, 50, 80, 70, 90, 60, 70, 80]},
        {name:"充电功率",data:[30, 40, 60, 50, 70, 20, 30, 40, 60]}
      ]
    }
  }
})

////echarts图表数据接口2 饼图
Mock.mock("https://www.demo.com/chartData2",'get',()=>{
  return {
    code: 200,
    message: '操作成功',
    data: {
      list:[
        { value: 35, name: '充电桩' },  // 数据值和名称
        { value: 30, name: '充电站' },
        { value: 25, name: '充电杆' }
      ]
    }
  };
})
//echarts图表数据接口3 雷达图
Mock.mock("https://www.demo.com/chartData3",'get',()=>{
  return {
    code: 200,
    message: '操作成功',
    data: {
      list: [42, 30, 200, 350, 500, 180]
    }
  };
})


//充电站监控接口
let chargingStation = [
  {
    name: "北京西单充电站",
    id: "VXZ10001",
    city: "北京",
    fast: 95,
    slow: 40,
    status: 3,
    now: 10,
    fault: 1,
    person: "张伟",
    tel: 17876554801
  },
  {
    name: "上海陆家嘴充电站",
    id: "VXZ10002",
    city: "上海",
    fast: 90,
    slow: 35,
    status: 2,
    now: 20,
    fault: 2,
    person: "李娜",
    tel: 17876554802
  },
  {
    name: "广州花城广场充电站",
    id: "VXZ10003",
    city: "广州",
    fast: 85,
    slow: 38,
    status: 2,
    now: 5,
    fault: 0,
    person: "王强",
    tel: 17876554803
  },
  {
    name: "深圳大梅沙充电站",
    id: "VXZ10004",
    city: "深圳",
    fast: 80,
    slow: 30,
    status: 3,
    now: 15,
    fault: 1,
    person: "赵敏",
    tel: 17876554804
  },
  {
    name: "成都天府广场充电站",
    id: "VXZ10005",
    city: "成都",
    fast: 88,
    slow: 37,
    status: 5,
    now: 12,
    fault: 2,
    person: "李晓华",
    tel: 17876554805
  },
  {
    name: "西安钟楼充电站",
    id: "VXZ10006",
    city: "西安",
    fast: 82,
    slow: 33,
    status: 4,
    now: 8,
    fault: 0,
    person: "刘伟",
    tel: 17876554806
  },
  {
    name: "杭州西湖充电站",
    id: "VXZ10007",
    city: "杭州",
    fast: 75,
    slow: 29,
    status: 3,
    now: 18,
    fault: 3,
    person: "陈芳",
    tel: 17876554807
  },
  {
    name: "南京夫子庙充电站",
    id: "VXZ10008",
    city: "南京",
    fast: 89,
    slow: 40,
    status: 2,
    now: 22,
    fault: 1,
    person: "黄伟",
    tel: 17876554808
  },
  {
    name: "天津意大利风情区充电站",
    id: "VXZ10009",
    city: "天津",
    fast: 87,
    slow: 36,
    status: 2,
    now: 6,
    fault: 0,
    person: "吴敏",
    tel: 17876554809
  },
  {
    name: "青岛栈桥充电站",
    id: "VXZ10010",
    city: "青岛",
    fast: 91,
    slow: 32,
    status: 3,
    now: 25,
    fault: 1,
    person: "杨杰",
    tel: 17876554810
  },
  {
    name: "武汉黄鹤楼充电站",
    id: "VXZ10011",
    city: "武汉",
    fast: 74,
    slow: 28,
    status: 2,
    now: 11,
    fault: 2,
    person: "周丽",
    tel: 17876554811
  },
  {
    name: "福州三坊七巷充电站",
    id: "VXZ10012",
    city: "福州",
    fast: 76,
    slow: 31,
    status: 4,
    now: 19,
    fault: 1,
    person: "林涛",
    tel: 17876554812
  },
  {
    name: "合肥包公园充电站",
    id: "VXZ10013",
    city: "合肥",
    fast: 70,
    slow: 30,
    status: 2,
    now: 3,
    fault: 0,
    person: "高峰",
    tel: 17876554813
  },
  {
    name: "重庆解放碑充电站",
    id: "VXZ10014",
    city: "重庆",
    fast: 83,
    slow: 34,
    status: 2,
    now: 14,
    fault: 2,
    person: "邓超",
    tel: 17876554814
  },
  {
    name: "桂林漓江充电站",
    id: "VXZ10015",
    city: "桂林",
    fast: 77,
    slow: 29,
    status: 2,
    now: 9,
    fault: 1,
    person: "李曼",
    tel: 17876554815
  },
  {
    name: "苏州园区充电站",
    id: "VXZ10016",
    city: "苏州",
    fast: 80,
    slow: 35,
    status: 2,
    now: 7,
    fault: 0,
    person: "王琦",
    tel: 17876554816
  },
  {
    name: "昆明滇池充电站",
    id: "VXZ10017",
    city: "昆明",
    fast: 79,
    slow: 33,
    status: 3,
    now: 21,
    fault: 1,
    person: "陈超",
    tel: 17876554817
  },
  {
    name: "南宁青秀山充电站",
    id: "VXZ10018",
    city: "南宁",
    fast: 81,
    slow: 36,
    status: 2,
    now: 13,
    fault: 0,
    person: "蔡徐坤",
    tel: 17876554818
  },
  {
    name: "长沙橘子洲头充电站",
    id: "VXZ10019",
    city: "长沙",
    fast: 78,
    slow: 34,
    status: 2,
    now: 4,
    fault: 0,
    person: "李安",
    tel: 17876554819
  },
  {
    name: "哈尔滨中央大街充电站",
    id: "VXZ10020",
    city: "哈尔滨",
    fast: 75,
    slow: 32,
    status: 2,
    now: 23,
    fault: 1,
    person: "林雨",
    tel: 17876554820
  },
  {
    name: "石家庄正定古城充电站",
    id: "VXZ10021",
    city: "石家庄",
    fast: 72,
    slow: 31,
    status: 4,
    now: 16,
    fault: 2,
    person: "郑明",
    tel: 17876554821
  },
  {
    name: "兰州黄河桥充电站",
    id: "VXZ10022",
    city: "兰州",
    fast: 88,
    slow: 38,
    status: 5,
    now: 5,
    fault: 0,
    person: "李伟",
    tel: 17876554822
  },
  {
    name: "济南大明湖充电站",
    id: "VXZ10023",
    city: "济南",
    fast: 93,
    slow: 39,
    status: 3,
    now: 17,
    fault: 1,
    person: "刘洋",
    tel: 17876554823
  },
  {
    name: "沈阳故宫充电站",
    id: "VXZ10024",
    city: "沈阳",
    fast: 76,
    slow: 32,
    status: 4,
    now: 19,
    fault: 1,
    person: "张博",
    tel: 17876554824
  },
  {
    name: "福州西湖充电站",
    id: "VXZ10025",
    city: "福州",
    fast: 79,
    slow: 34,
    status: 2,
    now: 6,
    fault: 0,
    person: "周扬",
    tel: 17876554825
  },
  {
    name: "无锡灵山大佛充电站",
    id: "VXZ10026",
    city: "无锡",
    fast: 85,
    slow: 38,
    status: 3,
    now: 12,
    fault: 1,
    person: "江海",
    tel: 17876554826
  },
  {
    name: "郑州二七广场充电站",
    id: "VXZ10027",
    city: "郑州",
    fast: 84,
    slow: 36,
    status: 3,
    now: 20,
    fault: 2,
    person: "胡丽",
    tel: 17876554827
  },
  {
    name: "大连星海广场充电站",
    id: "VXZ10028",
    city: "大连",
    fast: 82,
    slow: 35,
    status: 2,
    now: 7,
    fault: 0,
    person: "李涛",
    tel: 17876554828
  },
  {
    name: "宁波天一广场充电站",
    id: "VXZ10029",
    city: "宁波",
    fast: 90,
    slow: 40,
    status: 4,
    now: 15,
    fault: 1,
    person: "程伟",
    tel: 17876554829
  },
  {
    name: "贵阳甲秀楼充电站",
    id: "VXZ10030",
    city: "贵阳",
    fast: 81,
    slow: 33,
    status: 1,
    now: 14,
    fault: 2,
    person: "马云",
    tel: 17876554830
  },
  {
    name: "珠海长隆海洋王国充电站",
    id: "VXZ10031",
    city: "珠海",
    fast: 78,
    slow: 36,
    status: 1,
    now: 11,
    fault: 3,
    person: "王超",
    tel: 17876554831
  },
  {
    name: "天津滨海新区充电站",
    id: "VXZ10032",
    city: "天津",
    fast: 92,
    slow: 37,
    status: 2,
    now: 8,
    fault: 0,
    person: "黄华",
    tel: 17876554832
  }
];
// 原始的数据备份
const originalChargingStation = JSON.parse(JSON.stringify(chargingStation));
// 定义 API 接口
Mock.mock("https://www.demo.com/stationList", 'post', (options: any) => {
  chargingStation = originalChargingStation
  const { id, name, status, page, pageSize } = options.body ? JSON.parse(options.body) : {}
  // 根据条件过滤数据
  if (id) {
    chargingStation = chargingStation.filter(item => item.id === id);
  }
  if (name) {
    chargingStation = chargingStation.filter(item => item.name.includes(name));
  }
  if (status != 1) {
    chargingStation = chargingStation.filter(item => item.status === status);
  }
  // 实现分页
  const total = chargingStation.length;
  const start = (page - 1) * pageSize;
  const paginatedItems = chargingStation.slice(start, start + pageSize);
  return {
    code: 200,
    success: true,
    data: {
      list:paginatedItems,
      total
    },
    
  };
});

//新增/编辑充电站
Mock.mock("https://www.demo.com/station/edit", 'post', (options: any) => {
  const res: any = JSON.parse(options.body);
  console.log("新增/编辑充电站接口收到数据：",res)

  // 新增的逻辑：真正处理数据的新增和编辑
  // 检查是否是编辑操作（有id且id存在于数组中）
  const existingIndex = chargingStation.findIndex(item => item.id === res.id);

  if (existingIndex !== -1) {
    // 编辑操作：更新现有数据
    chargingStation[existingIndex] = {
      ...chargingStation[existingIndex],
      ...res
    };
    console.log("编辑成功，更新后的数据：", chargingStation[existingIndex]);
  } else {
    // 新增操作：添加新数据
    const newStation = {
      name: res.name,
      id: res.id,
      city: res.city,
      fast: parseInt(res.fast) || 0,
      slow: parseInt(res.slow) || 0,
      status: res.status,
      now: parseInt(res.now) || 0,
      fault: parseInt(res.fault) || 0,
      person: res.person,
      tel: res.tel
    };
    chargingStation.push(newStation);
    console.log("新增成功，新增的数据：", newStation);
  }

  // 原始代码（已注释）：
  // const res: any = JSON.parse(options.body);
  // console.log("新增/编辑充电站接口收到数据：",res)
  // return {
  //   code: 200,
  //   success: true,
  //   data: "操作成功",
  // };

  return {
    code: 200,
    success: true,
    data: "操作成功",
  };
});


//删除充电站接口
Mock.mock("https://www.demo.com/station/delete", "post", (options: any) => {
  const { id } = JSON.parse(options.body);
  console.log("删除充电站接口收到参数", { id })

  // 新增的逻辑：真正处理数据的删除
  // 查找要删除的充电站索引
  const deleteIndex = chargingStation.findIndex(item => item.id === id);

  if (deleteIndex !== -1) {
    // 找到了要删除的充电站，从数组中移除
    const deletedStation = chargingStation.splice(deleteIndex, 1)[0];
    console.log("删除成功，删除的数据：", deletedStation);
    return {
      code: 200,
      success: true,
      data: "删除成功",
    };
  } else {
    // 没有找到要删除的充电站
    console.log("删除失败，未找到ID为", id, "的充电站");
    return {
      code: 404,
      success: false,
      data: "未找到要删除的充电站",
    };
  }

  // 原始代码（已注释）：
  // console.log("删除充电站接口收到参数", JSON.parse(options.body))
  // return {
  //   code: 200,
  //   success: true,
  //   data: "操作成功",
  // };
})

//营收统计图表
Mock.mock("https://www.demo.com/revenueChart", "get", () => {
  return {
    code: 200,
    success: true,
    data: {
      list:[
        {
          name:"月度营收",
          data:[128.73, 145.84, 162.39, 139.26, 156.91, 171.47, 148.82]
        },
        {
          name:"充电量(万度)",
          data:[85.94, 92.67, 108.23, 96.85, 103.49, 115.73, 99.58]
        },

      ]
    }
  };
})

//营收统计接口
let chargingStation2 = [
  {
    name: "北京西单充电站",
    id: "VXZ10001",
    city: "北京",
    count: 48, // 充电桩总数量
    electricity: 127463, // 电费
    parkingFee: 18927, // 停车费
    serviceFee: 32684, // 服务费
    month: 179.07, // 月度总收入（万元）
    member: 45683, // 会员储值金
    percent: 8.5, // 增长比例
    mpercent: 12.3
  },
  {
    name: "上海陆家嘴充电站",
    id: "VXZ10002",
    city: "上海",
    count: 52, // fast + slow
    electricity: 141237,
    parkingFee: 22394,
    serviceFee: 36128,
    month: 199.76,
    member: 53472,
    percent: 15.2,
    mpercent: 18.7
  },
  {
    name: "广州花城广场充电站",
    id: "VXZ10003",
    city: "广州",
    count: 36,
    electricity: 100186,
    parkingFee: 15437,
    serviceFee: 25194,
    month: 140.82,
    member: 39128,
    percent: 6.8,
    mpercent: 9.2
  },
  {
    name: "深圳大梅沙充电站",
    id: "VXZ10004",
    city: "深圳",
    count: 44,
    electricity: 120394,
    parkingFee: 20063,
    serviceFee: 29587,
    month: 170.04,
    member: 44156,
    percent: -3.2,
    mpercent: 2.1
  },
  {
    name: "成都天府广场充电站",
    id: "VXZ10005",
    city: "成都",
    count: 40,
    electricity: 108572,
    parkingFee: 17148,
    serviceFee: 26893,
    month: 152.61,
    member: 40347,
    percent: 11.7,
    mpercent: 14.5
  },
  {
    name: "西安钟楼充电站",
    id: "VXZ10006",
    city: "西安",
    count: 32,
    electricity: 90758,
    parkingFee: 13829,
    serviceFee: 22146,
    month: 126.73,
    member: 32891,
    percent: 4.3,
    mpercent: 7.8
  },
  {
    name: "杭州西湖充电站",
    id: "VXZ10007",
    city: "杭州",
    count: 38,
    electricity: 104063,
    parkingFee: 16027,
    serviceFee: 25584,
    month: 145.67,
    member: 37729,
    percent: 9.1,
    mpercent: 11.6
  },
  {
    name: "南京夫子庙充电站",
    id: "VXZ10008",
    city: "南京",
    count: 42,
    electricity: 114186,
    parkingFee: 18473,
    serviceFee: 29018,
    month: 161.68,
    member: 42394,
    percent: 13.4,
    mpercent: 16.2
  },
  {
    name: "天津意大利风情区充电站",
    id: "VXZ10009",
    city: "天津",
    count: 35,
    electricity: 96247,
    parkingFee: 14936,
    serviceFee: 23782,
    month: 135.77,
    member: 36418,
    percent: -1.8,
    mpercent: 3.5
  },
  {
    name: "青岛栈桥充电站",
    id: "VXZ10010",
    city: "青岛",
    count: 39,
    electricity: 106529,
    parkingFee: 16684,
    serviceFee: 26473,
    month: 149.69,
    member: 39256,
    percent: 7.9,
    mpercent: 10.4
  },
  {
    name: "武汉黄鹤楼充电站",
    id: "VXZ10011",
    city: "武汉",
    count: 34,
    electricity: 93184,
    parkingFee: 14327,
    serviceFee: 23058,
    month: 130.57,
    member: 35142,
    percent: 5.6,
    mpercent: 8.2
  },
  {
    name: "福州三坊七巷充电站",
    id: "VXZ10012",
    city: "福州",
    count: 28,
    electricity: 78263,
    parkingFee: 12094,
    serviceFee: 19537,
    month: 109.89,
    member: 29863,
    percent: 3.7,
    mpercent: 6.1
  },
  {
    name: "合肥包公园充电站",
    id: "VXZ10013",
    city: "合肥",
    count: 30,
    electricity: 83947,
    parkingFee: 13026,
    serviceFee: 20938,
    month: 117.91,
    member: 31729,
    percent: -2.4,
    mpercent: 1.8
  },
  {
    name: "重庆解放碑充电站",
    id: "VXZ10014",
    city: "重庆",
    count: 37,
    electricity: 101384,
    parkingFee: 15763,
    serviceFee: 25327,
    month: 142.47,
    member: 37418,
    percent: 8.7,
    mpercent: 11.3
  },
  {
    name: "桂林漓江充电站",
    id: "VXZ10015",
    city: "桂林",
    count: 26,
    electricity: 72586,
    parkingFee: 10973,
    serviceFee: 17894,
    month: 101.45,
    member: 27739,
    percent: 2.9,
    mpercent: 5.4
  },
  {
    name: "苏州园区充电站",
    id: "VXZ10016",
    city: "苏州",
    count: 41,
    electricity: 111629,
    parkingFee: 17584,
    serviceFee: 28263,
    month: 157.48,
    member: 41127,
    percent: 12.1,
    mpercent: 15.6
  },
  {
    name: "昆明滇池充电站",
    id: "VXZ10017",
    city: "昆明",
    count: 29,
    electricity: 80758,
    parkingFee: 12394,
    serviceFee: 20147,
    month: 113.3,
    member: 30584,
    percent: 1.5,
    mpercent: 4.2
  },
  {
    name: "南宁青秀山充电站",
    id: "VXZ10018",
    city: "南宁",
    count: 31,
    electricity: 86473,
    parkingFee: 13327,
    serviceFee: 21584,
    month: 121.38,
    member: 33147,
    percent: -4.1,
    mpercent: -0.8
  },
  {
    name: "长沙橘子洲头充电站",
    id: "VXZ10019",
    city: "长沙",
    count: 33,
    electricity: 90284,
    parkingFee: 14026,
    serviceFee: 22693,
    month: 127.0,
    member: 34472,
    percent: 6.4,
    mpercent: 9.1
  },
  {
    name: "哈尔滨中央大街充电站",
    id: "VXZ10020",
    city: "哈尔滨",
    count: 27,
    electricity: 74863,
    parkingFee: 11394,
    serviceFee: 18729,
    month: 104.99,
    member: 29184,
    percent: -1.2,
    mpercent: 2.6
  },
  {
    name: "石家庄正定古城充电站",
    id: "VXZ10021",
    city: "石家庄",
    count: 25,
    electricity: 69673,
    parkingFee: 10684,
    serviceFee: 17394,
    month: 97.75,
    member: 27239,
    percent: -0.7,
    mpercent: 2.8
  },
  {
    name: "兰州黄河桥充电站",
    id: "VXZ10022",
    city: "兰州",
    count: 24,
    electricity: 66947,
    parkingFee: 10273,
    serviceFee: 16684,
    month: 93.9,
    member: 26058,
    percent: 4.3,
    mpercent: 7.1
  },
  {
    name: "济南大明湖充电站",
    id: "VXZ10023",
    city: "济南",
    count: 43,
    electricity: 117384,
    parkingFee: 18927,
    serviceFee: 30284,
    month: 166.6,
    member: 43058,
    percent: 10.8,
    mpercent: 13.9
  },
  {
    name: "沈阳故宫充电站",
    id: "VXZ10024",
    city: "沈阳",
    count: 28,
    electricity: 77594,
    parkingFee: 11926,
    serviceFee: 19347,
    month: 108.87,
    member: 29573,
    percent: -2.1,
    mpercent: 1.4
  },
  {
    name: "福州西湖充电站",
    id: "VXZ10025",
    city: "福州",
    count: 29,
    electricity: 81263,
    parkingFee: 12527,
    serviceFee: 20284,
    month: 114.07,
    member: 30947,
    percent: 5.8,
    mpercent: 8.2
  },
  {
    name: "无锡灵山大佛充电站",
    id: "VXZ10026",
    city: "无锡",
    count: 35,
    electricity: 95847,
    parkingFee: 14829,
    serviceFee: 24138,
    month: 134.81,
    member: 36284,
    percent: 7.2,
    mpercent: 10.1
  },
  {
    name: "郑州二七广场充电站",
    id: "VXZ10027",
    city: "郑州",
    count: 36,
    electricity: 99073,
    parkingFee: 15384,
    serviceFee: 24927,
    month: 139.38,
    member: 37529,
    percent: 9.4,
    mpercent: 12.6
  },
  {
    name: "大连星海广场充电站",
    id: "VXZ10028",
    city: "大连",
    count: 30,
    electricity: 83194,
    parkingFee: 12847,
    serviceFee: 20738,
    month: 116.78,
    member: 31573,
    percent: 3.9,
    mpercent: 6.7
  },
  {
    name: "宁波天一广场充电站",
    id: "VXZ10029",
    city: "宁波",
    count: 37,
    electricity: 102384,
    parkingFee: 15973,
    serviceFee: 25729,
    month: 144.09,
    member: 38647,
    percent: 8.6,
    mpercent: 11.4
  },
  {
    name: "贵阳甲秀楼充电站",
    id: "VXZ10030",
    city: "贵阳",
    count: 26,
    electricity: 72147,
    parkingFee: 11084,
    serviceFee: 18029,
    month: 101.26,
    member: 28294,
    percent: 1.8,
    mpercent: 4.5
  },
  {
    name: "珠海长隆海洋王国充电站",
    id: "VXZ10031",
    city: "珠海",
    count: 32,
    electricity: 88473,
    parkingFee: 13627,
    serviceFee: 22194,
    month: 124.29,
    member: 33784,
    percent: 6.1,
    mpercent: 8.8
  },
  {
    name: "天津滨海新区充电站",
    id: "VXZ10032",
    city: "天津",
    count: 46,
    electricity: 126194,
    parkingFee: 19573,
    serviceFee: 31684,
    month: 177.45,
    member: 45329,
    percent: 14.3,
    mpercent: 17.2
  }
];
// 原始的数据备份
const originalChargingStation2 = JSON.parse(JSON.stringify(chargingStation2));
// 定义 API 接口
Mock.mock("https://www.demo.com/revenueList", 'post', (options: any) => {
  chargingStation2 = originalChargingStation2
  const { name = "", page = 1, pageSize = 10 } = options.body ? JSON.parse(options.body) : {}
  // 根据条件过滤数据
  console.log("营收统计表格接口",name,page,pageSize)
  if (name) {
    chargingStation2 = chargingStation2.filter(item => item.name.includes(name));
  }
  // 实现分页
  const total = chargingStation2.length;
  const start = (page - 1) * pageSize;
  const paginatedItems = chargingStation2.slice(start, start + pageSize);
  return {
    code: 200,
    success: true,
    data:{
      list:paginatedItems,
      total,
    }  
  };
});

//充电桩管理接口
//充电桩管理
let chargingPile = [
  {
    id: "VXZ10001",
    name: "北京西单充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"12:08:17",msg:"充电80度，消费80元"},
          {time:"13:12:09",msg:"充电50度，消费50元"},
          {time:"13:15:22",msg:"充电60度，消费60元"},
          {time:"16:22:33",msg:"充电70度，消费70元"},
          {time:"17:27:17",msg:"充电90度，消费90元"},
          {time:"18:08:33",msg:"充电100度，消费100元"},
        ]
    },//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "29°c", status: 2, percent: "23%",
        record:[
          {time:"08:15:23",msg:"充电45度，消费45元"},
          {time:"10:22:17",msg:"充电65度，消费65元"},
          {time:"14:33:09",msg:"充电55度，消费55元"},
          {time:"16:45:22",msg:"充电75度，消费75元"},
          {time:"19:08:33",msg:"充电85度，消费85元"},
        ]
      },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"07:30:15",msg:"充电60度，消费60元"},
          {time:"11:45:28",msg:"充电40度，消费40元"},
          {time:"15:20:33",msg:"充电70度，消费70元"},
          {time:"18:55:17",msg:"充电95度，消费95元"},
        ]
      },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "67%",
        record:[
          {time:"09:12:45",msg:"充电35度，消费35元"},
          {time:"12:28:19",msg:"充电80度，消费80元"},
          {time:"16:15:42",msg:"充电50度，消费50元"},
          {time:"20:33:28",msg:"充电65度，消费65元"},
          {time:"22:18:55",msg:"充电90度，消费90元"},
        ]
      },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "30°c", status: 2, percent: "41%",
        record:[
          {time:"06:45:12",msg:"充电55度，消费55元"},
          {time:"10:18:37",msg:"充电75度，消费75元"},
          {time:"13:42:15",msg:"充电45度，消费45元"},
          {time:"17:25:48",msg:"充电85度，消费85元"},
        ]
      },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "78%",
        record:[
          {time:"08:33:27",msg:"充电42度，消费42元"},
          {time:"11:55:14",msg:"充电68度，消费68元"},
          {time:"15:12:39",msg:"充电58度，消费58元"},
          {time:"18:47:22",msg:"充电72度，消费72元"},
          {time:"21:15:33",msg:"充电88度，消费88元"},
        ]
      },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"07:22:18",msg:"充电38度，消费38元"},
          {time:"10:45:33",msg:"充电62度，消费62元"},
          {time:"14:18:27",msg:"充电48度，消费48元"},
          {time:"17:52:15",msg:"充电78度，消费78元"},
        ]
      },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "52%",
        record:[
          {time:"09:28:42",msg:"充电52度，消费52元"},
          {time:"12:15:18",msg:"充电72度，消费72元"},
          {time:"16:33:45",msg:"充电62度，消费62元"},
          {time:"19:48:27",msg:"充电82度，消费82元"},
          {time:"22:05:33",msg:"充电92度，消费92元"},
        ]
      },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"06:55:23",msg:"充电48度，消费48元"},
          {time:"10:22:17",msg:"充电68度，消费68元"},
          {time:"13:45:39",msg:"充电58度，消费58元"},
          {time:"17:18:22",msg:"充电78度，消费78元"},
        ]
      },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"08:12:35",msg:"充电44度，消费44元"},
          {time:"11:38:28",msg:"充电64度，消费64元"},
          {time:"15:25:17",msg:"充电54度，消费54元"},
          {time:"18:42:33",msg:"充电74度，消费74元"},
          {time:"21:28:45",msg:"充电84度，消费84元"},
        ]
      },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"07:45:18",msg:"充电56度，消费56元"},
          {time:"10:58:33",msg:"充电76度，消费76元"},
          {time:"14:22:27",msg:"充电66度，消费66元"},
          {time:"17:55:15",msg:"充电86度，消费86元"},
        ]
      },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"09:18:42",msg:"充电41度，消费41元"},
          {time:"12:35:28",msg:"充电61度，消费61元"},
          {time:"16:12:45",msg:"充电51度，消费51元"},
          {time:"19:28:17",msg:"充电71度，消费71元"},
          {time:"22:15:33",msg:"充电91度，消费91元"},
        ]
      },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"06:32:25",msg:"充电47度，消费47元"},
          {time:"09:48:17",msg:"充电67度，消费67元"},
          {time:"13:15:39",msg:"充电57度，消费57元"},
          {time:"16:42:22",msg:"充电77度，消费77元"},
        ]
      },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5,
        record:[
          {time:"08:25:33",msg:"充电43度，消费43元"},
          {time:"11:42:18",msg:"充电63度，消费63元"},
          {time:"15:18:45",msg:"充电53度，消费53元"},
          {time:"18:35:27",msg:"充电73度，消费73元"},
          {time:"21:52:15",msg:"充电83度，消费83元"},
        ]
      },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"07:15:28",msg:"充电59度，消费59元"},
          {time:"10:32:17",msg:"充电79度，消费79元"},
          {time:"14:48:33",msg:"充电69度，消费69元"},
          {time:"18:15:22",msg:"充电89度，消费89元"},
        ]
      },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "85%",
        record:[
          {time:"09:35:42",msg:"充电36度，消费36元"},
          {time:"12:52:28",msg:"充电56度，消费56元"},
          {time:"16:28:15",msg:"充电46度，消费46元"},
          {time:"19:45:33",msg:"充电66度，消费66元"},
          {time:"22:32:18",msg:"充电86度，消费86元"},
        ]
      },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"06:48:15",msg:"充电52度，消费52元"},
          {time:"10:15:33",msg:"充电72度，消费72元"},
          {time:"13:32:27",msg:"充电62度，消费62元"},
          {time:"17:08:22",msg:"充电82度，消费82元"},
        ]
      },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"08:58:38",msg:"充电39度，消费39元"},
          {time:"12:25:17",msg:"充电59度，消费59元"},
          {time:"15:42:33",msg:"充电49度，消费49元"},
          {time:"18:58:28",msg:"充电69度，消费69元"},
          {time:"21:45:15",msg:"充电79度，消费79元"},
        ]
      },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"07:38:22",msg:"充电54度，消费54元"},
          {time:"11:05:17",msg:"充电74度，消费74元"},
          {time:"14:32:39",msg:"充电64度，消费64元"},
          {time:"17:48:33",msg:"充电84度，消费84元"},
        ]
      },
    ],
  },
  {
    id: "VXZ10002",
    name: "上海陆家嘴充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "34%",//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
        record:[
          {time:"06:25:18",msg:"充电65度，消费65元"},
          {time:"09:42:33",msg:"充电85度，消费85元"},
          {time:"13:18:27",msg:"充电75度，消费75元"},
          {time:"16:55:15",msg:"充电95度，消费95元"},
          {time:"20:32:42",msg:"充电105度，消费105元"},
        ]
      },
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "62%",
        record:[
          {time:"07:48:25",msg:"充电58度，消费58元"},
          {time:"11:15:17",msg:"充电78度，消费78元"},
          {time:"14:42:39",msg:"充电68度，消费68元"},
          {time:"18:28:22",msg:"充电88度，消费88元"},
        ]
      },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "27°c", status: 6,
        record:[
          {time:"08:35:42",msg:"充电42度，消费42元"},
          {time:"12:08:28",msg:"充电62度，消费62元"},
          {time:"15:25:15",msg:"充电52度，消费52元"},
          {time:"19:12:33",msg:"充电72度，消费72元"},
          {time:"22:48:18",msg:"充电82度，消费82元"},
        ]
      },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5,
        record:[
          {time:"06:58:15",msg:"充电55度，消费55元"},
          {time:"10:32:27",msg:"充电75度，消费75元"},
          {time:"13:48:39",msg:"充电65度，消费65元"},
          {time:"17:25:22",msg:"充电85度，消费85元"},
        ]
      },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"09:15:33",msg:"充电48度，消费48元"},
          {time:"12:42:18",msg:"充电68度，消费68元"},
          {time:"16:18:45",msg:"充电58度，消费58元"},
          {time:"19:55:27",msg:"充电78度，消费78元"},
          {time:"23:12:15",msg:"充电88度，消费88元"},
        ]
      },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "47%",
        record:[
          {time:"07:22:28",msg:"充电51度，消费51元"},
          {time:"10:48:17",msg:"充电71度，消费71元"},
          {time:"14:15:33",msg:"充电61度，消费61元"},
          {time:"17:42:22",msg:"充电81度，消费81元"},
        ]
      },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3,
        record:[
          {time:"08:45:42",msg:"充电44度，消费44元"},
          {time:"12:22:28",msg:"充电64度，消费64元"},
          {time:"15:58:15",msg:"充电54度，消费54元"},
          {time:"19:35:33",msg:"充电74度，消费74元"},
          {time:"22:18:45",msg:"充电84度，消费84元"},
        ]
      },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "89%",
        record:[
          {time:"06:38:15",msg:"充电57度，消费57元"},
          {time:"10:15:27",msg:"充电77度，消费77元"},
          {time:"13:52:39",msg:"充电67度，消费67元"},
          {time:"17:28:22",msg:"充电87度，消费87元"},
        ]
      },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3,
        record:[
          {time:"09:28:33",msg:"充电41度，消费41元"},
          {time:"12:55:18",msg:"充电61度，消费61元"},
          {time:"16:32:45",msg:"充电51度，消费51元"},
          {time:"20:08:27",msg:"充电71度，消费71元"},
          {time:"23:25:15",msg:"充电81度，消费81元"},
        ]
      },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"07:52:28",msg:"充电54度，消费54元"},
          {time:"11:28:17",msg:"充电74度，消费74元"},
          {time:"14:45:33",msg:"充电64度，消费64元"},
          {time:"18:22:22",msg:"充电84度，消费84元"},
        ]
      },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:18:42",msg:"充电47度，消费47元"},
          {time:"11:45:28",msg:"充电67度，消费67元"},
          {time:"15:22:15",msg:"充电57度，消费57元"},
          {time:"18:58:33",msg:"充电77度，消费77元"},
          {time:"22:35:45",msg:"充电87度，消费87元"},
        ]
      },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"06:42:15",msg:"充电50度，消费50元"},
          {time:"10:18:27",msg:"充电70度，消费70元"},
          {time:"13:35:39",msg:"充电60度，消费60元"},
          {time:"17:12:22",msg:"充电80度，消费80元"},
        ]
      },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:05:33",msg:"充电43度，消费43元"},
          {time:"12:32:18",msg:"充电63度，消费63元"},
          {time:"16:08:45",msg:"充电53度，消费53元"},
          {time:"19:45:27",msg:"充电73度，消费73元"},
          {time:"23:02:15",msg:"充电83度，消费83元"},
        ]
      },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5,
        record:[
          {time:"07:35:28",msg:"充电56度，消费56元"},
          {time:"11:12:17",msg:"充电76度，消费76元"},
          {time:"14:48:33",msg:"充电66度，消费66元"},
          {time:"18:25:22",msg:"充电86度，消费86元"},
        ]
      },

    ],
  },
  {
    id: "VXZ10003",
    name: "广州花城广场充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3,//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
        record:[
          {time:"06:15:22",msg:"充电63度，消费63元"},
          {time:"09:38:17",msg:"充电83度，消费83元"},
          {time:"13:25:33",msg:"充电73度，消费73元"},
          {time:"16:52:28",msg:"充电93度，消费93元"},
          {time:"20:18:45",msg:"充电103度，消费103元"},
        ]
      },
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "19%",
        record:[
          {time:"07:42:15",msg:"充电46度，消费46元"},
          {time:"11:18:33",msg:"充电66度，消费66元"},
          {time:"14:55:27",msg:"充电56度，消费56元"},
          {time:"18:32:22",msg:"充电76度，消费76元"},
        ]
      },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3,
        record:[
          {time:"08:28:42",msg:"充电49度，消费49元"},
          {time:"12:05:18",msg:"充电69度，消费69元"},
          {time:"15:42:45",msg:"充电59度，消费59元"},
          {time:"19:18:27",msg:"充电79度，消费79元"},
          {time:"22:55:15",msg:"充电89度，消费89元"},
        ]
      },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "53%",
        record:[
          {time:"06:52:28",msg:"充电52度，消费52元"},
          {time:"10:28:17",msg:"充电72度，消费72元"},
          {time:"13:45:33",msg:"充电62度，消费62元"},
          {time:"17:22:22",msg:"充电82度，消费82元"},
        ]
      },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:18:15",msg:"充电45度，消费45元"},
          {time:"12:45:33",msg:"充电65度，消费65元"},
          {time:"16:22:28",msg:"充电55度，消费55元"},
          {time:"19:58:45",msg:"充电75度，消费75元"},
          {time:"23:35:22",msg:"充电85度，消费85元"},
        ]
      },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "76%",
        record:[
          {time:"07:25:42",msg:"充电58度，消费58元"},
          {time:"11:02:17",msg:"充电78度，消费78元"},
          {time:"14:38:33",msg:"充电68度，消费68元"},
          {time:"18:15:28",msg:"充电88度，消费88元"},
        ]
      },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"08:48:28",msg:"充电41度，消费41元"},
          {time:"12:25:15",msg:"充电61度，消费61元"},
          {time:"16:02:42",msg:"充电51度，消费51元"},
          {time:"19:38:33",msg:"充电71度，消费71元"},
          {time:"23:15:18",msg:"充电81度，消费81元"},
        ]
      },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3,
        record:[
          {time:"06:35:17",msg:"充电54度，消费54元"},
          {time:"10:12:33",msg:"充电74度，消费74元"},
          {time:"13:48:28",msg:"充电64度，消费64元"},
          {time:"17:25:45",msg:"充电84度，消费84元"},
        ]
      },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:22:42",msg:"充电47度，消费47元"},
          {time:"12:58:17",msg:"充电67度，消费67元"},
          {time:"16:35:33",msg:"充电57度，消费57元"},
          {time:"20:12:28",msg:"充电77度，消费77元"},
          {time:"23:48:45",msg:"充电87度，消费87元"},
        ]
      },

      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5,
        record:[
          {time:"07:58:15",msg:"充电53度，消费53元"},
          {time:"11:35:33",msg:"充电73度，消费73元"},
          {time:"15:12:28",msg:"充电63度，消费63元"},
          {time:"18:48:45",msg:"充电83度，消费83元"},
        ]
      },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2 ,percent: "38%",
        record:[
          {time:"08:32:42",msg:"充电50度，消费50元"},
          {time:"12:08:17",msg:"充电70度，消费70元"},
          {time:"15:45:33",msg:"充电60度，消费60元"},
          {time:"19:22:28",msg:"充电80度，消费80元"},
          {time:"22:58:15",msg:"充电90度，消费90元"},
        ]
      },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3,
        record:[
          {time:"06:45:28",msg:"充电56度，消费56元"},
          {time:"10:22:17",msg:"充电76度，消费76元"},
          {time:"13:58:33",msg:"充电66度，消费66元"},
          {time:"17:35:45",msg:"充电86度，消费86元"},
        ]
      },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"09:12:15",msg:"充电43度，消费43元"},
          {time:"12:48:33",msg:"充电63度，消费63元"},
          {time:"16:25:28",msg:"充电53度，消费53元"},
          {time:"20:02:42",msg:"充电73度，消费73元"},
          {time:"23:38:17",msg:"充电83度，消费83元"},
        ]
      },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"07:18:42",msg:"充电59度，消费59元"},
          {time:"10:55:28",msg:"充电79度，消费79元"},
          {time:"14:32:15",msg:"充电69度，消费69元"},
          {time:"18:08:33",msg:"充电89度，消费89元"},
        ]
      },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"08:55:17",msg:"充电42度，消费42元"},
          {time:"12:32:33",msg:"充电62度，消费62元"},
          {time:"16:08:28",msg:"充电52度，消费52元"},
          {time:"19:45:42",msg:"充电72度，消费72元"},
          {time:"23:22:15",msg:"充电82度，消费82元"},
        ]
      },
    ],
  },
  {
    id: "VXZ10004",
    name: "深圳大梅沙充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
        record:[
          {time:"06:28:15",msg:"充电61度，消费61元"},
          {time:"09:45:33",msg:"充电81度，消费81元"},
          {time:"13:22:28",msg:"充电71度，消费71元"},
          {time:"16:58:42",msg:"充电91度，消费91元"},
          {time:"20:35:17",msg:"充电101度，消费101元"},
        ]
      },
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "42%",
        record:[
          {time:"07:52:42",msg:"充电44度，消费44元"},
          {time:"11:28:17",msg:"充电64度，消费64元"},
          {time:"15:05:33",msg:"充电54度，消费54元"},
          {time:"18:42:28",msg:"充电74度，消费74元"},
        ]
      },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:18:28",msg:"充电47度，消费47元"},
          {time:"12:15:15",msg:"充电67度，消费67元"},
          {time:"15:52:42",msg:"充电57度，消费57元"},
          {time:"19:28:33",msg:"充电77度，消费77元"},
          {time:"23:05:18",msg:"充电87度，消费87元"},
        ]
      },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "68%",
        record:[
          {time:"06:45:17",msg:"充电50度，消费50元"},
          {time:"10:22:33",msg:"充电70度，消费70元"},
          {time:"13:58:28",msg:"充电60度，消费60元"},
          {time:"17:35:42",msg:"充电80度，消费80元"},
        ]
      },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "15%",
        record:[
          {time:"09:32:15",msg:"充电43度，消费43元"},
          {time:"13:08:33",msg:"充电63度，消费63元"},
          {time:"16:45:28",msg:"充电53度，消费53元"},
          {time:"20:22:42",msg:"充电73度，消费73元"},
          {time:"23:58:17",msg:"充电83度，消费83元"},
        ]
      },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "83%",
        record:[
          {time:"07:15:42",msg:"充电56度，消费56元"},
          {time:"10:52:17",msg:"充电76度，消费76元"},
          {time:"14:28:33",msg:"充电66度，消费66元"},
          {time:"18:05:28",msg:"充电86度，消费86元"},
        ]
      },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3,
        record:[
          {time:"08:38:28",msg:"充电39度，消费39元"},
          {time:"12:15:15",msg:"充电59度，消费59元"},
          {time:"15:52:42",msg:"充电49度，消费49元"},
          {time:"19:28:33",msg:"充电69度，消费69元"},
          {time:"23:05:18",msg:"充电79度，消费79元"},
        ]
      },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "57%",
        record:[
          {time:"06:22:17",msg:"充电52度，消费52元"},
          {time:"09:58:33",msg:"充电72度，消费72元"},
          {time:"13:35:28",msg:"充电62度，消费62元"},
          {time:"17:12:42",msg:"充电82度，消费82元"},
        ]
      },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:48:15",msg:"充电45度，消费45元"},
          {time:"13:25:33",msg:"充电65度，消费65元"},
          {time:"17:02:28",msg:"充电55度，消费55元"},
          {time:"20:38:42",msg:"充电75度，消费75元"},
          {time:"00:15:17",msg:"充电85度，消费85元"},
        ]
      },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"07:35:42",msg:"充电58度，消费58元"},
          {time:"11:12:17",msg:"充电78度，消费78元"},
          {time:"14:48:33",msg:"充电68度，消费68元"},
          {time:"18:25:28",msg:"充电88度，消费88元"},
        ]
      },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:58:28",msg:"充电41度，消费41元"},
          {time:"12:35:15",msg:"充电61度，消费61元"},
          {time:"16:12:42",msg:"充电51度，消费51元"},
          {time:"19:48:33",msg:"充电71度，消费71元"},
          {time:"23:25:18",msg:"充电81度，消费81元"},
        ]
      },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"06:12:17",msg:"充电54度，消费54元"},
          {time:"09:48:33",msg:"充电74度，消费74元"},
          {time:"13:25:28",msg:"充电64度，消费64元"},
          {time:"17:02:42",msg:"充电84度，消费84元"},
        ]
      },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:25:15",msg:"充电47度，消费47元"},
          {time:"13:02:33",msg:"充电67度，消费67元"},
          {time:"16:38:28",msg:"充电57度，消费57元"},
          {time:"20:15:42",msg:"充电77度，消费77元"},
          {time:"23:52:17",msg:"充电87度，消费87元"},
        ]
      },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5,
        record:[
          {time:"07:48:42",msg:"充电50度，消费50元"},
          {time:"11:25:17",msg:"充电70度，消费70元"},
          {time:"15:02:33",msg:"充电60度，消费60元"},
          {time:"18:38:28",msg:"充电80度，消费80元"},
        ]
      },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:15:28",msg:"充电53度，消费53元"},
          {time:"11:52:15",msg:"充电73度，消费73元"},
          {time:"15:28:42",msg:"充电63度，消费63元"},
          {time:"19:05:33",msg:"充电83度，消费83元"},
          {time:"22:42:18",msg:"充电93度，消费93元"},
        ]
      },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "91%",
        record:[
          {time:"06:38:17",msg:"充电56度，消费56元"},
          {time:"10:15:33",msg:"充电76度，消费76元"},
          {time:"13:52:28",msg:"充电66度，消费66元"},
          {time:"17:28:42",msg:"充电86度，消费86元"},
        ]
      },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"09:05:15",msg:"充电49度，消费49元"},
          {time:"12:42:33",msg:"充电69度，消费69元"},
          {time:"16:18:28",msg:"充电59度，消费59元"},
          {time:"19:55:42",msg:"充电79度，消费79元"},
          {time:"23:32:17",msg:"充电89度，消费89元"},
        ]
      },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"07:28:42",msg:"充电42度，消费42元"},
          {time:"11:05:17",msg:"充电62度，消费62元"},
          {time:"14:42:33",msg:"充电52度，消费52元"},
          {time:"18:18:28",msg:"充电72度，消费72元"},
        ]
      },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"08:52:28",msg:"充电45度，消费45元"},
          {time:"12:28:15",msg:"充电65度，消费65元"},
          {time:"16:05:42",msg:"充电55度，消费55元"},
          {time:"19:42:33",msg:"充电75度，消费75元"},
          {time:"23:18:18",msg:"充电85度，消费85元"},
        ]
      },
    ],
  },
  {
    id: "VXZ10005",
    name: "成都天府广场充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
        record:[
          {time:"06:18:25",msg:"充电59度，消费59元"},
          {time:"09:35:17",msg:"充电79度，消费79元"},
          {time:"13:12:33",msg:"充电69度，消费69元"},
          {time:"16:48:28",msg:"充电89度，消费89元"},
          {time:"20:25:42",msg:"充电99度，消费99元"},
        ]
      },
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "58%",
        record:[
          {time:"07:42:18",msg:"充电42度，消费42元"},
          {time:"11:18:33",msg:"充电62度，消费62元"},
          {time:"14:55:28",msg:"充电52度，消费52元"},
          {time:"18:32:42",msg:"充电72度，消费72元"},
        ]
      },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:28:42",msg:"充电45度，消费45元"},
          {time:"12:05:17",msg:"充电65度，消费65元"},
          {time:"15:42:33",msg:"充电55度，消费55元"},
          {time:"19:18:28",msg:"充电75度，消费75元"},
          {time:"22:55:15",msg:"充电85度，消费85元"},
        ]
      },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "55%",
        record:[
          {time:"06:52:15",msg:"充电48度，消费48元"},
          {time:"10:28:33",msg:"充电68度，消费68元"},
          {time:"14:05:28",msg:"充电58度，消费58元"},
          {time:"17:42:42",msg:"充电78度，消费78元"},
        ]
      },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "36%",
        record:[
          {time:"09:15:28",msg:"充电41度，消费41元"},
          {time:"12:52:17",msg:"充电61度，消费61元"},
          {time:"16:28:33",msg:"充电51度，消费51元"},
          {time:"20:05:42",msg:"充电71度，消费71元"},
          {time:"23:42:18",msg:"充电81度，消费81元"},
        ]
      },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "44%",
        record:[
          {time:"07:38:42",msg:"充电54度，消费54元"},
          {time:"11:15:17",msg:"充电74度，消费74元"},
          {time:"14:52:33",msg:"充电64度，消费64元"},
          {time:"18:28:28",msg:"充电84度，消费84元"},
        ]
      },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3,
        record:[
          {time:"08:05:15",msg:"充电37度，消费37元"},
          {time:"11:42:33",msg:"充电57度，消费57元"},
          {time:"15:18:28",msg:"充电47度，消费47元"},
          {time:"18:55:42",msg:"充电67度，消费67元"},
          {time:"22:32:17",msg:"充电77度，消费77元"},
        ]
      },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "48%",
        record:[
          {time:"06:32:28",msg:"充电50度，消费50元"},
          {time:"10:08:17",msg:"充电70度，消费70元"},
          {time:"13:45:33",msg:"充电60度，消费60元"},
          {time:"17:22:42",msg:"充电80度，消费80元"},
        ]
      },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:58:42",msg:"充电43度，消费43元"},
          {time:"13:35:17",msg:"充电63度，消费63元"},
          {time:"17:12:33",msg:"充电53度，消费53元"},
          {time:"20:48:28",msg:"充电73度，消费73元"},
          {time:"00:25:15",msg:"充电83度，消费83元"},
        ]
      },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"07:25:15",msg:"充电56度，消费56元"},
          {time:"11:02:33",msg:"充电76度，消费76元"},
          {time:"14:38:28",msg:"充电66度，消费66元"},
          {time:"18:15:42",msg:"充电86度，消费86元"},
        ]
      },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:48:28",msg:"充电39度，消费39元"},
          {time:"12:25:17",msg:"充电59度，消费59元"},
          {time:"16:02:33",msg:"充电49度，消费49元"},
          {time:"19:38:42",msg:"充电69度，消费69元"},
          {time:"23:15:18",msg:"充电79度，消费79元"},
        ]
      },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"06:15:42",msg:"充电52度，消费52元"},
          {time:"09:52:17",msg:"充电72度，消费72元"},
          {time:"13:28:33",msg:"充电62度，消费62元"},
          {time:"17:05:28",msg:"充电82度，消费82元"},
        ]
      },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:38:15",msg:"充电45度，消费45元"},
          {time:"13:15:33",msg:"充电65度，消费65元"},
          {time:"16:52:28",msg:"充电55度，消费55元"},
          {time:"20:28:42",msg:"充电75度，消费75元"},
          {time:"00:05:17",msg:"充电85度，消费85元"},
        ]
      },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5,
        record:[
          {time:"07:02:28",msg:"充电48度，消费48元"},
          {time:"10:38:17",msg:"充电68度，消费68元"},
          {time:"14:15:33",msg:"充电58度，消费58元"},
          {time:"17:52:42",msg:"充电78度，消费78元"},
        ]
      },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:25:42",msg:"充电51度，消费51元"},
          {time:"12:02:17",msg:"充电71度，消费71元"},
          {time:"15:38:33",msg:"充电61度，消费61元"},
          {time:"19:15:28",msg:"充电81度，消费81元"},
          {time:"22:52:15",msg:"充电91度，消费91元"},
        ]
      },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "60%",
        record:[
          {time:"06:48:15",msg:"充电54度，消费54元"},
          {time:"10:25:33",msg:"充电74度，消费74元"},
          {time:"14:02:28",msg:"充电64度，消费64元"},
          {time:"17:38:42",msg:"充电84度，消费84元"},
        ]
      },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"09:12:28",msg:"充电47度，消费47元"},
          {time:"12:48:17",msg:"充电67度，消费67元"},
          {time:"16:25:33",msg:"充电57度，消费57元"},
          {time:"20:02:42",msg:"充电77度，消费77元"},
          {time:"23:38:18",msg:"充电87度，消费87元"},
        ]
      },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"07:35:42",msg:"充电40度，消费40元"},
          {time:"11:12:17",msg:"充电60度，消费60元"},
          {time:"14:48:33",msg:"充电50度，消费50元"},
          {time:"18:25:28",msg:"充电70度，消费70元"},
        ]
      },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"08:58:15",msg:"充电43度，消费43元"},
          {time:"12:35:33",msg:"充电63度，消费63元"},
          {time:"16:12:28",msg:"充电53度，消费53元"},
          {time:"19:48:42",msg:"充电73度，消费73元"},
          {time:"23:25:17",msg:"充电83度，消费83元"},
        ]
      },
    ],
  },
  {
    id: "VXZ10006",
    name: "西安钟楼充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
        record:[
          {time:"06:22:18",msg:"充电57度，消费57元"},
          {time:"09:48:33",msg:"充电77度，消费77元"},
          {time:"13:25:28",msg:"充电67度，消费67元"},
          {time:"17:02:42",msg:"充电87度，消费87元"},
          {time:"20:38:17",msg:"充电97度，消费97元"},
        ]
      },
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "29%",
        record:[
          {time:"07:45:25",msg:"充电40度，消费40元"},
          {time:"11:22:17",msg:"充电60度，消费60元"},
          {time:"14:58:33",msg:"充电50度，消费50元"},
          {time:"18:35:28",msg:"充电70度，消费70元"},
        ]
      },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:12:42",msg:"充电43度，消费43元"},
          {time:"11:48:17",msg:"充电63度，消费63元"},
          {time:"15:25:33",msg:"充电53度，消费53元"},
          {time:"19:02:28",msg:"充电73度，消费73元"},
          {time:"22:38:15",msg:"充电83度，消费83元"},
        ]
      },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "64%",
        record:[
          {time:"06:35:28",msg:"充电46度，消费46元"},
          {time:"10:12:17",msg:"充电66度，消费66元"},
          {time:"13:48:33",msg:"充电56度，消费56元"},
          {time:"17:25:42",msg:"充电76度，消费76元"},
        ]
      },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "37%",
        record:[
          {time:"09:58:15",msg:"充电39度，消费39元"},
          {time:"13:35:33",msg:"充电59度，消费59元"},
          {time:"17:12:28",msg:"充电49度，消费49元"},
          {time:"20:48:42",msg:"充电69度，消费69元"},
          {time:"00:25:17",msg:"充电79度，消费79元"},
        ]
      },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "81%",
        record:[
          {time:"07:22:42",msg:"充电52度，消费52元"},
          {time:"10:58:17",msg:"充电72度，消费72元"},
          {time:"14:35:33",msg:"充电62度，消费62元"},
          {time:"18:12:28",msg:"充电82度，消费82元"},
        ]
      },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3,
        record:[
          {time:"08:45:28",msg:"充电35度，消费35元"},
          {time:"12:22:15",msg:"充电55度，消费55元"},
          {time:"15:58:42",msg:"充电45度，消费45元"},
          {time:"19:35:33",msg:"充电65度，消费65元"},
          {time:"23:12:18",msg:"充电75度，消费75元"},
        ]
      },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "56%",
        record:[
          {time:"06:08:17",msg:"充电48度，消费48元"},
          {time:"09:45:33",msg:"充电68度，消费68元"},
          {time:"13:22:28",msg:"充电58度，消费58元"},
          {time:"16:58:42",msg:"充电78度，消费78元"},
        ]
      },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:32:15",msg:"充电41度，消费41元"},
          {time:"13:08:33",msg:"充电61度，消费61元"},
          {time:"16:45:28",msg:"充电51度，消费51元"},
          {time:"20:22:42",msg:"充电71度，消费71元"},
          {time:"23:58:17",msg:"充电81度，消费81元"},
        ]
      },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"07:55:42",msg:"充电54度，消费54元"},
          {time:"11:32:17",msg:"充电74度，消费74元"},
          {time:"15:08:33",msg:"充电64度，消费64元"},
          {time:"18:45:28",msg:"充电84度，消费84元"},
        ]
      },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:18:28",msg:"充电37度，消费37元"},
          {time:"11:55:15",msg:"充电57度，消费57元"},
          {time:"15:32:42",msg:"充电47度，消费47元"},
          {time:"19:08:33",msg:"充电67度，消费67元"},
          {time:"22:45:18",msg:"充电77度，消费77元"},
        ]
      },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"06:42:17",msg:"充电50度，消费50元"},
          {time:"10:18:33",msg:"充电70度，消费70元"},
          {time:"13:55:28",msg:"充电60度，消费60元"},
          {time:"17:32:42",msg:"充电80度，消费80元"},
        ]
      },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:05:15",msg:"充电43度，消费43元"},
          {time:"12:42:33",msg:"充电63度，消费63元"},
          {time:"16:18:28",msg:"充电53度，消费53元"},
          {time:"19:55:42",msg:"充电73度，消费73元"},
          {time:"23:32:17",msg:"充电83度，消费83元"},
        ]
      },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5,
        record:[
          {time:"07:28:42",msg:"充电46度，消费46元"},
          {time:"11:05:17",msg:"充电66度，消费66元"},
          {time:"14:42:33",msg:"充电56度，消费56元"},
          {time:"18:18:28",msg:"充电76度，消费76元"},
        ]
      },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:52:28",msg:"充电49度，消费49元"},
          {time:"12:28:15",msg:"充电69度，消费69元"},
          {time:"16:05:42",msg:"充电59度，消费59元"},
          {time:"19:42:33",msg:"充电79度，消费79元"},
          {time:"23:18:18",msg:"充电89度，消费89元"},
        ]
      },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "73%",
        record:[
          {time:"06:15:17",msg:"充电52度，消费52元"},
          {time:"09:52:33",msg:"充电72度，消费72元"},
          {time:"13:28:28",msg:"充电62度，消费62元"},
          {time:"17:05:42",msg:"充电82度，消费82元"},
        ]
      },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"09:38:15",msg:"充电45度，消费45元"},
          {time:"13:15:33",msg:"充电65度，消费65元"},
          {time:"16:52:28",msg:"充电55度，消费55元"},
          {time:"20:28:42",msg:"充电75度，消费75元"},
          {time:"00:05:17",msg:"充电85度，消费85元"},
        ]
      },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"07:02:42",msg:"充电38度，消费38元"},
          {time:"10:38:17",msg:"充电58度，消费58元"},
          {time:"14:15:33",msg:"充电48度，消费48元"},
          {time:"17:52:28",msg:"充电68度，消费68元"},
        ]
      },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"08:25:28",msg:"充电41度，消费41元"},
          {time:"12:02:15",msg:"充电61度，消费61元"},
          {time:"15:38:42",msg:"充电51度，消费51元"},
          {time:"19:15:33",msg:"充电71度，消费71元"},
          {time:"22:52:18",msg:"充电81度，消费81元"},
        ]
      },
    ],
  },
  {
    id: "VXZ10007",
    name: "杭州西湖充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
        record:[
          {time:"06:32:25",msg:"充电55度，消费55元"},
          {time:"09:58:17",msg:"充电75度，消费75元"},
          {time:"13:35:33",msg:"充电65度，消费65元"},
          {time:"17:12:28",msg:"充电85度，消费85元"},
          {time:"20:48:42",msg:"充电95度，消费95元"},
        ]
      },
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "33%",
        record:[
          {time:"07:55:18",msg:"充电38度，消费38元"},
          {time:"11:32:33",msg:"充电58度，消费58元"},
          {time:"15:08:28",msg:"充电48度，消费48元"},
          {time:"18:45:42",msg:"充电68度，消费68元"},
        ]
      },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:22:42",msg:"充电41度，消费41元"},
          {time:"11:58:17",msg:"充电61度，消费61元"},
          {time:"15:35:33",msg:"充电51度，消费51元"},
          {time:"19:12:28",msg:"充电71度，消费71元"},
          {time:"22:48:15",msg:"充电81度，消费81元"},
        ]
      },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "59%",
        record:[
          {time:"06:45:28",msg:"充电44度，消费44元"},
          {time:"10:22:17",msg:"充电64度，消费64元"},
          {time:"13:58:33",msg:"充电54度，消费54元"},
          {time:"17:35:42",msg:"充电74度，消费74元"},
        ]
      },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "74%",
        record:[
          {time:"09:08:15",msg:"充电37度，消费37元"},
          {time:"12:45:33",msg:"充电57度，消费57元"},
          {time:"16:22:28",msg:"充电47度，消费47元"},
          {time:"19:58:42",msg:"充电67度，消费67元"},
          {time:"23:35:17",msg:"充电77度，消费77元"},
        ]
      },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "46%",
        record:[
          {time:"07:32:42",msg:"充电50度，消费50元"},
          {time:"11:08:17",msg:"充电70度，消费70元"},
          {time:"14:45:33",msg:"充电60度，消费60元"},
          {time:"18:22:28",msg:"充电80度，消费80元"},
        ]
      },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3,
        record:[
          {time:"08:55:28",msg:"充电33度，消费33元"},
          {time:"12:32:15",msg:"充电53度，消费53元"},
          {time:"16:08:42",msg:"充电43度，消费43元"},
          {time:"19:45:33",msg:"充电63度，消费63元"},
          {time:"23:22:18",msg:"充电73度，消费73元"},
        ]
      },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "87%",
        record:[
          {time:"06:18:17",msg:"充电46度，消费46元"},
          {time:"09:55:33",msg:"充电66度，消费66元"},
          {time:"13:32:28",msg:"充电56度，消费56元"},
          {time:"17:08:42",msg:"充电76度，消费76元"},
        ]
      },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:42:15",msg:"充电39度，消费39元"},
          {time:"13:18:33",msg:"充电59度，消费59元"},
          {time:"16:55:28",msg:"充电49度，消费49元"},
          {time:"20:32:42",msg:"充电69度，消费69元"},
          {time:"00:08:17",msg:"充电79度，消费79元"},
        ]
      },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"07:05:42",msg:"充电52度，消费52元"},
          {time:"10:42:17",msg:"充电72度，消费72元"},
          {time:"14:18:33",msg:"充电62度，消费62元"},
          {time:"17:55:28",msg:"充电82度，消费82元"},
        ]
      },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:28:28",msg:"充电35度，消费35元"},
          {time:"12:05:15",msg:"充电55度，消费55元"},
          {time:"15:42:42",msg:"充电45度，消费45元"},
          {time:"19:18:33",msg:"充电65度，消费65元"},
          {time:"22:55:18",msg:"充电75度，消费75元"},
        ]
      },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"06:52:17",msg:"充电48度，消费48元"},
          {time:"10:28:33",msg:"充电68度，消费68元"},
          {time:"14:05:28",msg:"充电58度，消费58元"},
          {time:"17:42:42",msg:"充电78度，消费78元"},
        ]
      },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:15:15",msg:"充电41度，消费41元"},
          {time:"12:52:33",msg:"充电61度，消费61元"},
          {time:"16:28:28",msg:"充电51度，消费51元"},
          {time:"20:05:42",msg:"充电71度，消费71元"},
          {time:"23:42:17",msg:"充电81度，消费81元"},
        ]
      },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5,
        record:[
          {time:"07:38:42",msg:"充电44度，消费44元"},
          {time:"11:15:17",msg:"充电64度，消费64元"},
          {time:"14:52:33",msg:"充电54度，消费54元"},
          {time:"18:28:28",msg:"充电74度，消费74元"},
        ]
      },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:02:28",msg:"充电47度，消费47元"},
          {time:"12:38:15",msg:"充电67度，消费67元"},
          {time:"16:15:42",msg:"充电57度，消费57元"},
          {time:"19:52:33",msg:"充电77度，消费77元"},
          {time:"23:28:18",msg:"充电87度，消费87元"},
        ]
      },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "18%",
        record:[
          {time:"06:25:17",msg:"充电50度，消费50元"},
          {time:"10:02:33",msg:"充电70度，消费70元"},
          {time:"13:38:28",msg:"充电60度，消费60元"},
          {time:"17:15:42",msg:"充电80度，消费80元"},
        ]
      },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"09:48:15",msg:"充电43度，消费43元"},
          {time:"13:25:33",msg:"充电63度，消费63元"},
          {time:"17:02:28",msg:"充电53度，消费53元"},
          {time:"20:38:42",msg:"充电73度，消费73元"},
          {time:"00:15:17",msg:"充电83度，消费83元"},
        ]
      },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"07:12:42",msg:"充电36度，消费36元"},
          {time:"10:48:17",msg:"充电56度，消费56元"},
          {time:"14:25:33",msg:"充电46度，消费46元"},
          {time:"18:02:28",msg:"充电66度，消费66元"},
        ]
      },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"08:35:28",msg:"充电39度，消费39元"},
          {time:"12:12:15",msg:"充电59度，消费59元"},
          {time:"15:48:42",msg:"充电49度，消费49元"},
          {time:"19:25:33",msg:"充电69度，消费69元"},
          {time:"23:02:18",msg:"充电79度，消费79元"},
        ]
      },
    ],
  },
  {
    id: "VXZ10008",
    name: "南京夫子庙充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
        record:[
          {time:"06:28:32",msg:"充电53度，消费53元"},
          {time:"09:55:18",msg:"充电73度，消费73元"},
          {time:"13:32:33",msg:"充电63度，消费63元"},
          {time:"17:08:28",msg:"充电83度，消费83元"},
          {time:"20:45:42",msg:"充电93度，消费93元"},
        ]
      },
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "51%",
        record:[
          {time:"07:52:25",msg:"充电36度，消费36元"},
          {time:"11:28:17",msg:"充电56度，消费56元"},
          {time:"15:05:33",msg:"充电46度，消费46元"},
          {time:"18:42:28",msg:"充电66度，消费66元"},
        ]
      },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:18:42",msg:"充电39度，消费39元"},
          {time:"11:55:17",msg:"充电59度，消费59元"},
          {time:"15:32:33",msg:"充电49度，消费49元"},
          {time:"19:08:28",msg:"充电69度，消费69元"},
          {time:"22:45:15",msg:"充电79度，消费79元"},
        ]
      },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "26%",
        record:[
          {time:"06:42:28",msg:"充电42度，消费42元"},
          {time:"10:18:17",msg:"充电62度，消费62元"},
          {time:"13:55:33",msg:"充电52度，消费52元"},
          {time:"17:32:42",msg:"充电72度，消费72元"},
        ]
      },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "79%",
        record:[
          {time:"09:05:15",msg:"充电35度，消费35元"},
          {time:"12:42:33",msg:"充电55度，消费55元"},
          {time:"16:18:28",msg:"充电45度，消费45元"},
          {time:"19:55:42",msg:"充电65度，消费65元"},
          {time:"23:32:17",msg:"充电75度，消费75元"},
        ]
      },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "43%",
        record:[
          {time:"07:28:42",msg:"充电48度，消费48元"},
          {time:"11:05:17",msg:"充电68度，消费68元"},
          {time:"14:42:33",msg:"充电58度，消费58元"},
          {time:"18:18:28",msg:"充电78度，消费78元"},
        ]
      },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3,
        record:[
          {time:"08:52:28",msg:"充电31度，消费31元"},
          {time:"12:28:15",msg:"充电51度，消费51元"},
          {time:"16:05:42",msg:"充电41度，消费41元"},
          {time:"19:42:33",msg:"充电61度，消费61元"},
          {time:"23:18:18",msg:"充电71度，消费71元"},
        ]
      },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "65%",
        record:[
          {time:"06:15:17",msg:"充电44度，消费44元"},
          {time:"09:52:33",msg:"充电64度，消费64元"},
          {time:"13:28:28",msg:"充电54度，消费54元"},
          {time:"17:05:42",msg:"充电74度，消费74元"},
        ]
      },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:38:15",msg:"充电37度，消费37元"},
          {time:"13:15:33",msg:"充电57度，消费57元"},
          {time:"16:52:28",msg:"充电47度，消费47元"},
          {time:"20:28:42",msg:"充电67度，消费67元"},
          {time:"00:05:17",msg:"充电77度，消费77元"},
        ]
      },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"07:02:42",msg:"充电50度，消费50元"},
          {time:"10:38:17",msg:"充电70度，消费70元"},
          {time:"14:15:33",msg:"充电60度，消费60元"},
          {time:"17:52:28",msg:"充电80度，消费80元"},
        ]
      },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:25:28",msg:"充电33度，消费33元"},
          {time:"12:02:15",msg:"充电53度，消费53元"},
          {time:"15:38:42",msg:"充电43度，消费43元"},
          {time:"19:15:33",msg:"充电63度，消费63元"},
          {time:"22:52:18",msg:"充电73度，消费73元"},
        ]
      },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"06:48:17",msg:"充电46度，消费46元"},
          {time:"10:25:33",msg:"充电66度，消费66元"},
          {time:"14:02:28",msg:"充电56度，消费56元"},
          {time:"17:38:42",msg:"充电76度，消费76元"},
        ]
      },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:12:15",msg:"充电39度，消费39元"},
          {time:"12:48:33",msg:"充电59度，消费59元"},
          {time:"16:25:28",msg:"充电49度，消费49元"},
          {time:"20:02:42",msg:"充电69度，消费69元"},
          {time:"23:38:17",msg:"充电79度，消费79元"},
        ]
      },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5,
        record:[
          {time:"07:35:42",msg:"充电42度，消费42元"},
          {time:"11:12:17",msg:"充电62度，消费62元"},
          {time:"14:48:33",msg:"充电52度，消费52元"},
          {time:"18:25:28",msg:"充电72度，消费72元"},
        ]
      },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:58:28",msg:"充电45度，消费45元"},
          {time:"12:35:15",msg:"充电65度，消费65元"},
          {time:"16:12:42",msg:"充电55度，消费55元"},
          {time:"19:48:33",msg:"充电75度，消费75元"},
          {time:"23:25:18",msg:"充电85度，消费85元"},
        ]
      },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "92%",
        record:[
          {time:"06:22:17",msg:"充电48度，消费48元"},
          {time:"09:58:33",msg:"充电68度，消费68元"},
          {time:"13:35:28",msg:"充电58度，消费58元"},
          {time:"17:12:42",msg:"充电78度，消费78元"},
        ]
      },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"09:45:15",msg:"充电41度，消费41元"},
          {time:"13:22:33",msg:"充电61度，消费61元"},
          {time:"16:58:28",msg:"充电51度，消费51元"},
          {time:"20:35:42",msg:"充电71度，消费71元"},
          {time:"00:12:17",msg:"充电81度，消费81元"},
        ]
      },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"07:08:42",msg:"充电34度，消费34元"},
          {time:"10:45:17",msg:"充电54度，消费54元"},
          {time:"14:22:33",msg:"充电44度，消费44元"},
          {time:"17:58:28",msg:"充电64度，消费64元"},
        ]
      },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"08:32:28",msg:"充电37度，消费37元"},
          {time:"12:08:15",msg:"充电57度，消费57元"},
          {time:"15:45:42",msg:"充电47度，消费47元"},
          {time:"19:22:33",msg:"充电67度，消费67元"},
          {time:"22:58:18",msg:"充电77度，消费77元"},
        ]
      },
    ],
  },
  {
    id: "VXZ10009",
    name: "天津意大利风情区充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
        record:[
          {time:"06:35:28",msg:"充电51度，消费51元"},
          {time:"10:02:17",msg:"充电71度，消费71元"},
          {time:"13:38:33",msg:"充电61度，消费61元"},
          {time:"17:15:28",msg:"充电81度，消费81元"},
          {time:"20:52:42",msg:"充电91度，消费91元"},
        ]
      },
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "35%",
        record:[
          {time:"07:58:25",msg:"充电34度，消费34元"},
          {time:"11:35:17",msg:"充电54度，消费54元"},
          {time:"15:12:33",msg:"充电44度，消费44元"},
          {time:"18:48:28",msg:"充电64度，消费64元"},
        ]
      },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:25:42",msg:"充电37度，消费37元"},
          {time:"12:02:17",msg:"充电57度，消费57元"},
          {time:"15:38:33",msg:"充电47度，消费47元"},
          {time:"19:15:28",msg:"充电67度，消费67元"},
          {time:"22:52:15",msg:"充电77度，消费77元"},
        ]
      },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "61%",
        record:[
          {time:"06:48:28",msg:"充电40度，消费40元"},
          {time:"10:25:17",msg:"充电60度，消费60元"},
          {time:"14:02:33",msg:"充电50度，消费50元"},
          {time:"17:38:42",msg:"充电70度，消费70元"},
        ]
      },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "48%",
        record:[
          {time:"09:12:15",msg:"充电33度，消费33元"},
          {time:"12:48:33",msg:"充电53度，消费53元"},
          {time:"16:25:28",msg:"充电43度，消费43元"},
          {time:"20:02:42",msg:"充电63度，消费63元"},
          {time:"23:38:17",msg:"充电73度，消费73元"},
        ]
      },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "77%",
        record:[
          {time:"07:35:42",msg:"充电46度，消费46元"},
          {time:"11:12:17",msg:"充电66度，消费66元"},
          {time:"14:48:33",msg:"充电56度，消费56元"},
          {time:"18:25:28",msg:"充电76度，消费76元"},
        ]
      },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3,
        record:[
          {time:"08:58:28",msg:"充电29度，消费29元"},
          {time:"12:35:15",msg:"充电49度，消费49元"},
          {time:"16:12:42",msg:"充电39度，消费39元"},
          {time:"19:48:33",msg:"充电59度，消费59元"},
          {time:"23:25:18",msg:"充电69度，消费69元"},
        ]
      },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "24%",
        record:[
          {time:"06:22:17",msg:"充电42度，消费42元"},
          {time:"09:58:33",msg:"充电62度，消费62元"},
          {time:"13:35:28",msg:"充电52度，消费52元"},
          {time:"17:12:42",msg:"充电72度，消费72元"},
        ]
      },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:45:15",msg:"充电35度，消费35元"},
          {time:"13:22:33",msg:"充电55度，消费55元"},
          {time:"16:58:28",msg:"充电45度，消费45元"},
          {time:"20:35:42",msg:"充电65度，消费65元"},
          {time:"00:12:17",msg:"充电75度，消费75元"},
        ]
      },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"07:08:42",msg:"充电48度，消费48元"},
          {time:"10:45:17",msg:"充电68度，消费68元"},
          {time:"14:22:33",msg:"充电58度，消费58元"},
          {time:"17:58:28",msg:"充电78度，消费78元"},
        ]
      },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:32:28",msg:"充电31度，消费31元"},
          {time:"12:08:15",msg:"充电51度，消费51元"},
          {time:"15:45:42",msg:"充电41度，消费41元"},
          {time:"19:22:33",msg:"充电61度，消费61元"},
          {time:"22:58:18",msg:"充电71度，消费71元"},
        ]
      },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"06:55:17",msg:"充电44度，消费44元"},
          {time:"10:32:33",msg:"充电64度，消费64元"},
          {time:"14:08:28",msg:"充电54度，消费54元"},
          {time:"17:45:42",msg:"充电74度，消费74元"},
        ]
      },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:18:15",msg:"充电37度，消费37元"},
          {time:"12:55:33",msg:"充电57度，消费57元"},
          {time:"16:32:28",msg:"充电47度，消费47元"},
          {time:"20:08:42",msg:"充电67度，消费67元"},
          {time:"23:45:17",msg:"充电77度，消费77元"},
        ]
      },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5,
        record:[
          {time:"07:42:42",msg:"充电40度，消费40元"},
          {time:"11:18:17",msg:"充电60度，消费60元"},
          {time:"14:55:33",msg:"充电50度，消费50元"},
          {time:"18:32:28",msg:"充电70度，消费70元"},
        ]
      },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:05:28",msg:"充电43度，消费43元"},
          {time:"12:42:15",msg:"充电63度，消费63元"},
          {time:"16:18:42",msg:"充电53度，消费53元"},
          {time:"19:55:33",msg:"充电73度，消费73元"},
          {time:"23:32:18",msg:"充电83度，消费83元"},
        ]
      },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "86%",
        record:[
          {time:"06:28:17",msg:"充电46度，消费46元"},
          {time:"10:05:33",msg:"充电66度，消费66元"},
          {time:"13:42:28",msg:"充电56度，消费56元"},
          {time:"17:18:42",msg:"充电76度，消费76元"},
        ]
      },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"09:52:15",msg:"充电39度，消费39元"},
          {time:"13:28:33",msg:"充电59度，消费59元"},
          {time:"17:05:28",msg:"充电49度，消费49元"},
          {time:"20:42:42",msg:"充电69度，消费69元"},
          {time:"00:18:17",msg:"充电79度，消费79元"},
        ]
      },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"07:15:42",msg:"充电32度，消费32元"},
          {time:"10:52:17",msg:"充电52度，消费52元"},
          {time:"14:28:33",msg:"充电42度，消费42元"},
          {time:"18:05:28",msg:"充电62度，消费62元"},
        ]
      },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"08:38:28",msg:"充电35度，消费35元"},
          {time:"12:15:15",msg:"充电55度，消费55元"},
          {time:"15:52:42",msg:"充电45度，消费45元"},
          {time:"19:28:33",msg:"充电65度，消费65元"},
          {time:"23:05:18",msg:"充电75度，消费75元"},
        ]
      },
    ],
  },
  {
    id: "VXZ10010",
    name: "青岛栈桥充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
        record:[
          {time:"06:42:35",msg:"充电49度，消费49元"},
          {time:"10:18:17",msg:"充电69度，消费69元"},
          {time:"13:55:33",msg:"充电59度，消费59元"},
          {time:"17:32:28",msg:"充电79度，消费79元"},
          {time:"21:08:42",msg:"充电89度，消费89元"},
        ]
      },
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "32%",
        record:[
          {time:"08:05:25",msg:"充电32度，消费32元"},
          {time:"11:42:17",msg:"充电52度，消费52元"},
          {time:"15:18:33",msg:"充电42度，消费42元"},
          {time:"18:55:28",msg:"充电62度，消费62元"},
        ]
      },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:32:42",msg:"充电35度，消费35元"},
          {time:"12:08:17",msg:"充电55度，消费55元"},
          {time:"15:45:33",msg:"充电45度，消费45元"},
          {time:"19:22:28",msg:"充电65度，消费65元"},
          {time:"22:58:15",msg:"充电75度，消费75元"},
        ]
      },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "71%",
        record:[
          {time:"06:55:28",msg:"充电38度，消费38元"},
          {time:"10:32:17",msg:"充电58度，消费58元"},
          {time:"14:08:33",msg:"充电48度，消费48元"},
          {time:"17:45:42",msg:"充电68度，消费68元"},
        ]
      },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "66%",
        record:[
          {time:"09:18:15",msg:"充电31度，消费31元"},
          {time:"12:55:33",msg:"充电51度，消费51元"},
          {time:"16:32:28",msg:"充电41度，消费41元"},
          {time:"20:08:42",msg:"充电61度，消费61元"},
          {time:"23:45:17",msg:"充电71度，消费71元"},
        ]
      },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "62%",
        record:[
          {time:"07:42:42",msg:"充电44度，消费44元"},
          {time:"11:18:17",msg:"充电64度，消费64元"},
          {time:"14:55:33",msg:"充电54度，消费54元"},
          {time:"18:32:28",msg:"充电74度，消费74元"},
        ]
      },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3,
        record:[
          {time:"09:05:28",msg:"充电27度，消费27元"},
          {time:"12:42:15",msg:"充电47度，消费47元"},
          {time:"16:18:42",msg:"充电37度，消费37元"},
          {time:"19:55:33",msg:"充电57度，消费57元"},
          {time:"23:32:18",msg:"充电67度，消费67元"},
        ]
      },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "39%",
        record:[
          {time:"06:28:17",msg:"充电40度，消费40元"},
          {time:"10:05:33",msg:"充电60度，消费60元"},
          {time:"13:42:28",msg:"充电50度，消费50元"},
          {time:"17:18:42",msg:"充电70度，消费70元"},
        ]
      },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:52:15",msg:"充电33度，消费33元"},
          {time:"13:28:33",msg:"充电53度，消费53元"},
          {time:"17:05:28",msg:"充电43度，消费43元"},
          {time:"20:42:42",msg:"充电63度，消费63元"},
          {time:"00:18:17",msg:"充电73度，消费73元"},
        ]
      },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"07:15:42",msg:"充电46度，消费46元"},
          {time:"10:52:17",msg:"充电66度，消费66元"},
          {time:"14:28:33",msg:"充电56度，消费56元"},
          {time:"18:05:28",msg:"充电76度，消费76元"},
        ]
      },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:38:28",msg:"充电29度，消费29元"},
          {time:"12:15:15",msg:"充电49度，消费49元"},
          {time:"15:52:42",msg:"充电39度，消费39元"},
          {time:"19:28:33",msg:"充电59度，消费59元"},
          {time:"23:05:18",msg:"充电69度，消费69元"},
        ]
      },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"07:02:17",msg:"充电42度，消费42元"},
          {time:"10:38:33",msg:"充电62度，消费62元"},
          {time:"14:15:28",msg:"充电52度，消费52元"},
          {time:"17:52:42",msg:"充电72度，消费72元"},
        ]
      },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:25:15",msg:"充电35度，消费35元"},
          {time:"13:02:33",msg:"充电55度，消费55元"},
          {time:"16:38:28",msg:"充电45度，消费45元"},
          {time:"20:15:42",msg:"充电65度，消费65元"},
          {time:"23:52:17",msg:"充电75度，消费75元"},
        ]
      },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5,
        record:[
          {time:"07:48:42",msg:"充电38度，消费38元"},
          {time:"11:25:17",msg:"充电58度，消费58元"},
          {time:"15:02:33",msg:"充电48度，消费48元"},
          {time:"18:38:28",msg:"充电68度，消费68元"},
        ]
      },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:12:28",msg:"充电41度，消费41元"},
          {time:"12:48:15",msg:"充电61度，消费61元"},
          {time:"16:25:42",msg:"充电51度，消费51元"},
          {time:"20:02:33",msg:"充电71度，消费71元"},
          {time:"23:38:18",msg:"充电81度，消费81元"},
        ]
      },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "66%",
        record:[
          {time:"06:35:17",msg:"充电44度，消费44元"},
          {time:"10:12:33",msg:"充电64度，消费64元"},
          {time:"13:48:28",msg:"充电54度，消费54元"},
          {time:"17:25:42",msg:"充电74度，消费74元"},
        ]
      },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"09:58:15",msg:"充电37度，消费37元"},
          {time:"13:35:33",msg:"充电57度，消费57元"},
          {time:"17:12:28",msg:"充电47度，消费47元"},
          {time:"20:48:42",msg:"充电67度，消费67元"},
          {time:"00:25:17",msg:"充电77度，消费77元"},
        ]
      },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"07:22:42",msg:"充电30度，消费30元"},
          {time:"10:58:17",msg:"充电50度，消费50元"},
          {time:"14:35:33",msg:"充电40度，消费40元"},
          {time:"18:12:28",msg:"充电60度，消费60元"},
        ]
      },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"08:45:28",msg:"充电33度，消费33元"},
          {time:"12:22:15",msg:"充电53度，消费53元"},
          {time:"15:58:42",msg:"充电43度，消费43元"},
          {time:"19:35:33",msg:"充电63度，消费63元"},
          {time:"23:12:18",msg:"充电73度，消费73元"},
        ]
      },
    ],
  },
  {
    id: "VXZ10011",
    name: "武汉黄鹤楼充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
        record:[
          {time:"06:48:32",msg:"充电47度，消费47元"},
          {time:"10:25:18",msg:"充电67度，消费67元"},
          {time:"14:02:33",msg:"充电57度，消费57元"},
          {time:"17:38:28",msg:"充电77度，消费77元"},
          {time:"21:15:42",msg:"充电87度，消费87元"},
        ]
      },
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "88%",
        record:[
          {time:"08:12:25",msg:"充电30度，消费30元"},
          {time:"11:48:17",msg:"充电50度，消费50元"},
          {time:"15:25:33",msg:"充电40度，消费40元"},
          {time:"19:02:28",msg:"充电60度，消费60元"},
        ]
      },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:38:42",msg:"充电33度，消费33元"},
          {time:"12:15:17",msg:"充电53度，消费53元"},
          {time:"15:52:33",msg:"充电43度，消费43元"},
          {time:"19:28:28",msg:"充电63度，消费63元"},
          {time:"23:05:15",msg:"充电73度，消费73元"},
        ]
      },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "55%",
        record:[
          {time:"07:02:28",msg:"充电36度，消费36元"},
          {time:"10:38:17",msg:"充电56度，消费56元"},
          {time:"14:15:33",msg:"充电46度，消费46元"},
          {time:"17:52:42",msg:"充电66度，消费66元"},
        ]
      },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "35%",
        record:[
          {time:"09:25:15",msg:"充电29度，消费29元"},
          {time:"13:02:33",msg:"充电49度，消费49元"},
          {time:"16:38:28",msg:"充电39度，消费39元"},
          {time:"20:15:42",msg:"充电59度，消费59元"},
          {time:"23:52:17",msg:"充电69度，消费69元"},
        ]
      },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "49%",
        record:[
          {time:"07:48:42",msg:"充电42度，消费42元"},
          {time:"11:25:17",msg:"充电62度，消费62元"},
          {time:"15:02:33",msg:"充电52度，消费52元"},
          {time:"18:38:28",msg:"充电72度，消费72元"},
        ]
      },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3,
        record:[
          {time:"09:12:28",msg:"充电25度，消费25元"},
          {time:"12:48:15",msg:"充电45度，消费45元"},
          {time:"16:25:42",msg:"充电35度，消费35元"},
          {time:"20:02:33",msg:"充电55度，消费55元"},
          {time:"23:38:18",msg:"充电65度，消费65元"},
        ]
      },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "41%",
        record:[
          {time:"06:35:17",msg:"充电38度，消费38元"},
          {time:"10:12:33",msg:"充电58度，消费58元"},
          {time:"13:48:28",msg:"充电48度，消费48元"},
          {time:"17:25:42",msg:"充电68度，消费68元"},
        ]
      },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:58:15",msg:"充电31度，消费31元"},
          {time:"13:35:33",msg:"充电51度，消费51元"},
          {time:"17:12:28",msg:"充电41度，消费41元"},
          {time:"20:48:42",msg:"充电61度，消费61元"},
          {time:"00:25:17",msg:"充电71度，消费71元"},
        ]
      },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"07:22:42",msg:"充电44度，消费44元"},
          {time:"10:58:17",msg:"充电64度，消费64元"},
          {time:"14:35:33",msg:"充电54度，消费54元"},
          {time:"18:12:28",msg:"充电74度，消费74元"},
        ]
      },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:45:28",msg:"充电27度，消费27元"},
          {time:"12:22:15",msg:"充电47度，消费47元"},
          {time:"15:58:42",msg:"充电37度，消费37元"},
          {time:"19:35:33",msg:"充电57度，消费57元"},
          {time:"23:12:18",msg:"充电67度，消费67元"},
        ]
      },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"07:08:17",msg:"充电40度，消费40元"},
          {time:"10:45:33",msg:"充电60度，消费60元"},
          {time:"14:22:28",msg:"充电50度，消费50元"},
          {time:"17:58:42",msg:"充电70度，消费70元"},
        ]
      },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:32:15",msg:"充电33度，消费33元"},
          {time:"13:08:33",msg:"充电53度，消费53元"},
          {time:"16:45:28",msg:"充电43度，消费43元"},
          {time:"20:22:42",msg:"充电63度，消费63元"},
          {time:"23:58:17",msg:"充电73度，消费73元"},
        ]
      },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5,
        record:[
          {time:"07:55:42",msg:"充电36度，消费36元"},
          {time:"11:32:17",msg:"充电56度，消费56元"},
          {time:"15:08:33",msg:"充电46度，消费46元"},
          {time:"18:45:28",msg:"充电66度，消费66元"},
        ]
      },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:18:28",msg:"充电39度，消费39元"},
          {time:"12:55:15",msg:"充电59度，消费59元"},
          {time:"16:32:42",msg:"充电49度，消费49元"},
          {time:"20:08:33",msg:"充电69度，消费69元"},
          {time:"23:45:18",msg:"充电79度，消费79元"},
        ]
      },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "56%",
        record:[
          {time:"06:42:17",msg:"充电42度，消费42元"},
          {time:"10:18:33",msg:"充电62度，消费62元"},
          {time:"13:55:28",msg:"充电52度，消费52元"},
          {time:"17:32:42",msg:"充电72度，消费72元"},
        ]
      },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"10:05:15",msg:"充电35度，消费35元"},
          {time:"13:42:33",msg:"充电55度，消费55元"},
          {time:"17:18:28",msg:"充电45度，消费45元"},
          {time:"20:55:42",msg:"充电65度，消费65元"},
          {time:"00:32:17",msg:"充电75度，消费75元"},
        ]
      },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"07:28:42",msg:"充电28度，消费28元"},
          {time:"11:05:17",msg:"充电48度，消费48元"},
          {time:"14:42:33",msg:"充电38度，消费38元"},
          {time:"18:18:28",msg:"充电58度，消费58元"},
        ]
      },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"08:52:28",msg:"充电31度，消费31元"},
          {time:"12:28:15",msg:"充电51度，消费51元"},
          {time:"16:05:42",msg:"充电41度，消费41元"},
          {time:"19:42:33",msg:"充电61度，消费61元"},
          {time:"23:18:18",msg:"充电71度，消费71元"},
        ]
      },
    ],
  },
  {
    id: "VXZ10012",
    name: "福州三坊七巷充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
        record:[
          {time:"06:55:28",msg:"充电45度，消费45元"},
          {time:"10:32:18",msg:"充电65度，消费65元"},
          {time:"14:08:33",msg:"充电55度，消费55元"},
          {time:"17:45:28",msg:"充电75度，消费75元"},
          {time:"21:22:42",msg:"充电85度，消费85元"},
        ]
      },
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "57%",
        record:[
          {time:"08:18:25",msg:"充电28度，消费28元"},
          {time:"11:55:17",msg:"充电48度，消费48元"},
          {time:"15:32:33",msg:"充电38度，消费38元"},
          {time:"19:08:28",msg:"充电58度，消费58元"},
        ]
      },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:45:42",msg:"充电31度，消费31元"},
          {time:"12:22:17",msg:"充电51度，消费51元"},
          {time:"15:58:33",msg:"充电41度，消费41元"},
          {time:"19:35:28",msg:"充电61度，消费61元"},
          {time:"23:12:15",msg:"充电71度，消费71元"},
        ]
      },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "20%",
        record:[
          {time:"07:08:28",msg:"充电34度，消费34元"},
          {time:"10:45:17",msg:"充电54度，消费54元"},
          {time:"14:22:33",msg:"充电44度，消费44元"},
          {time:"17:58:42",msg:"充电64度，消费64元"},
        ]
      },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "68%",
        record:[
          {time:"09:32:15",msg:"充电27度，消费27元"},
          {time:"13:08:33",msg:"充电47度，消费47元"},
          {time:"16:45:28",msg:"充电37度，消费37元"},
          {time:"20:22:42",msg:"充电57度，消费57元"},
          {time:"23:58:17",msg:"充电67度，消费67元"},
        ]
      },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "17%",
        record:[
          {time:"07:55:42",msg:"充电40度，消费40元"},
          {time:"11:32:17",msg:"充电60度，消费60元"},
          {time:"15:08:33",msg:"充电50度，消费50元"},
          {time:"18:45:28",msg:"充电70度，消费70元"},
        ]
      },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3,
        record:[
          {time:"09:18:28",msg:"充电23度，消费23元"},
          {time:"12:55:15",msg:"充电43度，消费43元"},
          {time:"16:32:42",msg:"充电33度，消费33元"},
          {time:"20:08:33",msg:"充电53度，消费53元"},
          {time:"23:45:18",msg:"充电63度，消费63元"},
        ]
      },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "81%",
        record:[
          {time:"06:42:17",msg:"充电36度，消费36元"},
          {time:"10:18:33",msg:"充电56度，消费56元"},
          {time:"13:55:28",msg:"充电46度，消费46元"},
          {time:"17:32:42",msg:"充电66度，消费66元"},
        ]
      },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"10:05:15",msg:"充电29度，消费29元"},
          {time:"13:42:33",msg:"充电49度，消费49元"},
          {time:"17:18:28",msg:"充电39度，消费39元"},
          {time:"20:55:42",msg:"充电59度，消费59元"},
          {time:"00:32:17",msg:"充电69度，消费69元"},
        ]
      },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"07:28:42",msg:"充电42度，消费42元"},
          {time:"11:05:17",msg:"充电62度，消费62元"},
          {time:"14:42:33",msg:"充电52度，消费52元"},
          {time:"18:18:28",msg:"充电72度，消费72元"},
        ]
      },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:52:28",msg:"充电25度，消费25元"},
          {time:"12:28:15",msg:"充电45度，消费45元"},
          {time:"16:05:42",msg:"充电35度，消费35元"},
          {time:"19:42:33",msg:"充电55度，消费55元"},
          {time:"23:18:18",msg:"充电65度，消费65元"},
        ]
      },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"07:15:17",msg:"充电38度，消费38元"},
          {time:"10:52:33",msg:"充电58度，消费58元"},
          {time:"14:28:28",msg:"充电48度，消费48元"},
          {time:"18:05:42",msg:"充电68度，消费68元"},
        ]
      },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:38:15",msg:"充电31度，消费31元"},
          {time:"13:15:33",msg:"充电51度，消费51元"},
          {time:"16:52:28",msg:"充电41度，消费41元"},
          {time:"20:28:42",msg:"充电61度，消费61元"},
          {time:"00:05:17",msg:"充电71度，消费71元"},
        ]
      },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5,
        record:[
          {time:"08:02:42",msg:"充电34度，消费34元"},
          {time:"11:38:17",msg:"充电54度，消费54元"},
          {time:"15:15:33",msg:"充电44度，消费44元"},
          {time:"18:52:28",msg:"充电64度，消费64元"},
        ]
      },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:25:28",msg:"充电37度，消费37元"},
          {time:"13:02:15",msg:"充电57度，消费57元"},
          {time:"16:38:42",msg:"充电47度，消费47元"},
          {time:"20:15:33",msg:"充电67度，消费67元"},
          {time:"23:52:18",msg:"充电77度，消费77元"},
        ]
      },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "85%",
        record:[
          {time:"06:48:17",msg:"充电40度，消费40元"},
          {time:"10:25:33",msg:"充电60度，消费60元"},
          {time:"14:02:28",msg:"充电50度，消费50元"},
          {time:"17:38:42",msg:"充电70度，消费70元"},
        ]
      },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"10:12:15",msg:"充电33度，消费33元"},
          {time:"13:48:33",msg:"充电53度，消费53元"},
          {time:"17:25:28",msg:"充电43度，消费43元"},
          {time:"21:02:42",msg:"充电63度，消费63元"},
          {time:"00:38:17",msg:"充电73度，消费73元"},
        ]
      },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"07:35:42",msg:"充电26度，消费26元"},
          {time:"11:12:17",msg:"充电46度，消费46元"},
          {time:"14:48:33",msg:"充电36度，消费36元"},
          {time:"18:25:28",msg:"充电56度，消费56元"},
        ]
      },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"08:58:28",msg:"充电29度，消费29元"},
          {time:"12:35:15",msg:"充电49度，消费49元"},
          {time:"16:12:42",msg:"充电39度，消费39元"},
          {time:"19:48:33",msg:"充电59度，消费59元"},
          {time:"23:25:18",msg:"充电69度，消费69元"},
        ]
      },
    ],
  },
  {
    id: "VXZ10013",
    name: "合肥包公园充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
        record:[
          {time:"07:02:35",msg:"充电43度，消费43元"},
          {time:"10:38:18",msg:"充电63度，消费63元"},
          {time:"14:15:33",msg:"充电53度，消费53元"},
          {time:"17:52:28",msg:"充电73度，消费73元"},
          {time:"21:28:42",msg:"充电83度，消费83元"},
        ]
      },
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "93%",
        record:[
          {time:"08:25:25",msg:"充电26度，消费26元"},
          {time:"12:02:17",msg:"充电46度，消费46元"},
          {time:"15:38:33",msg:"充电36度，消费36元"},
          {time:"19:15:28",msg:"充电56度，消费56元"},
        ]
      },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:52:42",msg:"充电29度，消费29元"},
          {time:"12:28:17",msg:"充电49度，消费49元"},
          {time:"16:05:33",msg:"充电39度，消费39元"},
          {time:"19:42:28",msg:"充电59度，消费59元"},
          {time:"23:18:15",msg:"充电69度，消费69元"},
        ]
      },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "33%",
        record:[
          {time:"07:15:28",msg:"充电32度，消费32元"},
          {time:"10:52:17",msg:"充电52度，消费52元"},
          {time:"14:28:33",msg:"充电42度，消费42元"},
          {time:"18:05:42",msg:"充电62度，消费62元"},
        ]
      },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "83%",
        record:[
          {time:"09:38:15",msg:"充电25度，消费25元"},
          {time:"13:15:33",msg:"充电45度，消费45元"},
          {time:"16:52:28",msg:"充电35度，消费35元"},
          {time:"20:28:42",msg:"充电55度，消费55元"},
          {time:"00:05:17",msg:"充电65度，消费65元"},
        ]
      },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "39%",
        record:[
          {time:"08:02:42",msg:"充电38度，消费38元"},
          {time:"11:38:17",msg:"充电58度，消费58元"},
          {time:"15:15:33",msg:"充电48度，消费48元"},
          {time:"18:52:28",msg:"充电68度，消费68元"},
        ]
      },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3,
        record:[
          {time:"09:25:28",msg:"充电21度，消费21元"},
          {time:"13:02:15",msg:"充电41度，消费41元"},
          {time:"16:38:42",msg:"充电31度，消费31元"},
          {time:"20:15:33",msg:"充电51度，消费51元"},
          {time:"23:52:18",msg:"充电61度，消费61元"},
        ]
      },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "57%",
        record:[
          {time:"06:48:17",msg:"充电34度，消费34元"},
          {time:"10:25:33",msg:"充电54度，消费54元"},
          {time:"14:02:28",msg:"充电44度，消费44元"},
          {time:"17:38:42",msg:"充电64度，消费64元"},
        ]
      },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"10:12:15",msg:"充电27度，消费27元"},
          {time:"13:48:33",msg:"充电47度，消费47元"},
          {time:"17:25:28",msg:"充电37度，消费37元"},
          {time:"21:02:42",msg:"充电57度，消费57元"},
          {time:"00:38:17",msg:"充电67度，消费67元"},
        ]
      },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"07:35:42",msg:"充电40度，消费40元"},
          {time:"11:12:17",msg:"充电60度，消费60元"},
          {time:"14:48:33",msg:"充电50度，消费50元"},
          {time:"18:25:28",msg:"充电70度，消费70元"},
        ]
      },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:58:28",msg:"充电23度，消费23元"},
          {time:"12:35:15",msg:"充电43度，消费43元"},
          {time:"16:12:42",msg:"充电33度，消费33元"},
          {time:"19:48:33",msg:"充电53度，消费53元"},
          {time:"23:25:18",msg:"充电63度，消费63元"},
        ]
      },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"07:22:17",msg:"充电36度，消费36元"},
          {time:"10:58:33",msg:"充电56度，消费56元"},
          {time:"14:35:28",msg:"充电46度，消费46元"},
          {time:"18:12:42",msg:"充电66度，消费66元"},
        ]
      },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:45:15",msg:"充电29度，消费29元"},
          {time:"13:22:33",msg:"充电49度，消费49元"},
          {time:"16:58:28",msg:"充电39度，消费39元"},
          {time:"20:35:42",msg:"充电59度，消费59元"},
          {time:"00:12:17",msg:"充电69度，消费69元"},
        ]
      },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5,
        record:[
          {time:"08:08:42",msg:"充电32度，消费32元"},
          {time:"11:45:17",msg:"充电52度，消费52元"},
          {time:"15:22:33",msg:"充电42度，消费42元"},
          {time:"18:58:28",msg:"充电62度，消费62元"},
        ]
      },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:32:28",msg:"充电35度，消费35元"},
          {time:"13:08:15",msg:"充电55度，消费55元"},
          {time:"16:45:42",msg:"充电45度，消费45元"},
          {time:"20:22:33",msg:"充电65度，消费65元"},
          {time:"23:58:18",msg:"充电75度，消费75元"},
        ]
      },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "55%",
        record:[
          {time:"06:55:17",msg:"充电38度，消费38元"},
          {time:"10:32:33",msg:"充电58度，消费58元"},
          {time:"14:08:28",msg:"充电48度，消费48元"},
          {time:"17:45:42",msg:"充电68度，消费68元"},
        ]
      },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"10:18:15",msg:"充电31度，消费31元"},
          {time:"13:55:33",msg:"充电51度，消费51元"},
          {time:"17:32:28",msg:"充电41度，消费41元"},
          {time:"21:08:42",msg:"充电61度，消费61元"},
          {time:"00:45:17",msg:"充电71度，消费71元"},
        ]
      },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"07:42:42",msg:"充电24度，消费24元"},
          {time:"11:18:17",msg:"充电44度，消费44元"},
          {time:"14:55:33",msg:"充电34度，消费34元"},
          {time:"18:32:28",msg:"充电54度，消费54元"},
        ]
      },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"09:05:28",msg:"充电27度，消费27元"},
          {time:"12:42:15",msg:"充电47度，消费47元"},
          {time:"16:18:42",msg:"充电37度，消费37元"},
          {time:"19:55:33",msg:"充电57度，消费57元"},
          {time:"23:32:18",msg:"充电67度，消费67元"},
        ]
      },
    ],
  },
  {
    id: "VXZ10014",
    name: "重庆解放碑充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
        record:[
          {time:"07:08:35",msg:"充电41度，消费41元"},
          {time:"10:45:18",msg:"充电61度，消费61元"},
          {time:"14:22:33",msg:"充电51度，消费51元"},
          {time:"17:58:28",msg:"充电71度，消费71元"},
          {time:"21:35:42",msg:"充电81度，消费81元"},
        ]
      },
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "24%",
        record:[
          {time:"08:32:25",msg:"充电24度，消费24元"},
          {time:"12:08:17",msg:"充电44度，消费44元"},
          {time:"15:45:33",msg:"充电34度，消费34元"},
          {time:"19:22:28",msg:"充电54度，消费54元"},
        ]
      },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"08:58:42",msg:"充电27度，消费27元"},
          {time:"12:35:17",msg:"充电47度，消费47元"},
          {time:"16:12:33",msg:"充电37度，消费37元"},
          {time:"19:48:28",msg:"充电57度，消费57元"},
          {time:"23:25:15",msg:"充电67度，消费67元"},
        ]
      },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "28%",
        record:[
          {time:"07:22:28",msg:"充电30度，消费30元"},
          {time:"10:58:17",msg:"充电50度，消费50元"},
          {time:"14:35:33",msg:"充电40度，消费40元"},
          {time:"18:12:42",msg:"充电60度，消费60元"},
        ]
      },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "91%",
        record:[
          {time:"09:45:15",msg:"充电23度，消费23元"},
          {time:"13:22:33",msg:"充电43度，消费43元"},
          {time:"16:58:28",msg:"充电33度，消费33元"},
          {time:"20:35:42",msg:"充电53度，消费53元"},
          {time:"00:12:17",msg:"充电63度，消费63元"},
        ]
      },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "79%",
        record:[
          {time:"08:08:42",msg:"充电36度，消费36元"},
          {time:"11:45:17",msg:"充电56度，消费56元"},
          {time:"15:22:33",msg:"充电46度，消费46元"},
          {time:"18:58:28",msg:"充电66度，消费66元"},
        ]
      },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3,
        record:[
          {time:"09:32:28",msg:"充电19度，消费19元"},
          {time:"13:08:15",msg:"充电39度，消费39元"},
          {time:"16:45:42",msg:"充电29度，消费29元"},
          {time:"20:22:33",msg:"充电49度，消费49元"},
          {time:"23:58:18",msg:"充电59度，消费59元"},
        ]
      },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "49%",
        record:[
          {time:"06:55:17",msg:"充电32度，消费32元"},
          {time:"10:32:33",msg:"充电52度，消费52元"},
          {time:"14:08:28",msg:"充电42度，消费42元"},
          {time:"17:45:42",msg:"充电62度，消费62元"},
        ]
      },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"10:18:15",msg:"充电25度，消费25元"},
          {time:"13:55:33",msg:"充电45度，消费45元"},
          {time:"17:32:28",msg:"充电35度，消费35元"},
          {time:"21:08:42",msg:"充电55度，消费55元"},
          {time:"00:45:17",msg:"充电65度，消费65元"},
        ]
      },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"07:42:42",msg:"充电38度，消费38元"},
          {time:"11:18:17",msg:"充电58度，消费58元"},
          {time:"14:55:33",msg:"充电48度，消费48元"},
          {time:"18:32:28",msg:"充电68度，消费68元"},
        ]
      },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:05:28",msg:"充电21度，消费21元"},
          {time:"12:42:15",msg:"充电41度，消费41元"},
          {time:"16:18:42",msg:"充电31度，消费31元"},
          {time:"19:55:33",msg:"充电51度，消费51元"},
          {time:"23:32:18",msg:"充电61度，消费61元"},
        ]
      },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"07:28:17",msg:"充电34度，消费34元"},
          {time:"11:05:33",msg:"充电54度，消费54元"},
          {time:"14:42:28",msg:"充电44度，消费44元"},
          {time:"18:18:42",msg:"充电64度，消费64元"},
        ]
      },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:52:15",msg:"充电27度，消费27元"},
          {time:"13:28:33",msg:"充电47度，消费47元"},
          {time:"17:05:28",msg:"充电37度，消费37元"},
          {time:"20:42:42",msg:"充电57度，消费57元"},
          {time:"00:18:17",msg:"充电67度，消费67元"},
        ]
      },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5,
        record:[
          {time:"08:15:42",msg:"充电30度，消费30元"},
          {time:"11:52:17",msg:"充电50度，消费50元"},
          {time:"15:28:33",msg:"充电40度，消费40元"},
          {time:"19:05:28",msg:"充电60度，消费60元"},
        ]
      },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:38:28",msg:"充电33度，消费33元"},
          {time:"13:15:15",msg:"充电53度，消费53元"},
          {time:"16:52:42",msg:"充电43度，消费43元"},
          {time:"20:28:33",msg:"充电63度，消费63元"},
          {time:"00:05:18",msg:"充电73度，消费73元"},
        ]
      },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "78%",
        record:[
          {time:"07:02:17",msg:"充电36度，消费36元"},
          {time:"10:38:33",msg:"充电56度，消费56元"},
          {time:"14:15:28",msg:"充电46度，消费46元"},
          {time:"17:52:42",msg:"充电66度，消费66元"},
        ]
      },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"10:25:15",msg:"充电29度，消费29元"},
          {time:"14:02:33",msg:"充电49度，消费49元"},
          {time:"17:38:28",msg:"充电39度，消费39元"},
          {time:"21:15:42",msg:"充电59度，消费59元"},
          {time:"00:52:17",msg:"充电69度，消费69元"},
        ]
      },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"07:48:42",msg:"充电22度，消费22元"},
          {time:"11:25:17",msg:"充电42度，消费42元"},
          {time:"15:02:33",msg:"充电32度，消费32元"},
          {time:"18:38:28",msg:"充电52度，消费52元"},
        ]
      },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"09:12:28",msg:"充电25度，消费25元"},
          {time:"12:48:15",msg:"充电45度，消费45元"},
          {time:"16:25:42",msg:"充电35度，消费35元"},
          {time:"20:02:33",msg:"充电55度，消费55元"},
          {time:"23:38:18",msg:"充电65度，消费65元"},
        ]
      },
    ],
  },
  {
    id: "VXZ10015",
    name: "桂林漓江充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
        record:[
          {time:"07:15:35",msg:"充电39度，消费39元"},
          {time:"10:52:18",msg:"充电59度，消费59元"},
          {time:"14:28:33",msg:"充电49度，消费49元"},
          {time:"18:05:28",msg:"充电69度，消费69元"},
          {time:"21:42:42",msg:"充电79度，消费79元"},
        ]
      },
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "29%",
        record:[
          {time:"08:38:25",msg:"充电22度，消费22元"},
          {time:"12:15:17",msg:"充电42度，消费42元"},
          {time:"15:52:33",msg:"充电32度，消费32元"},
          {time:"19:28:28",msg:"充电52度，消费52元"},
        ]
      },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:05:42",msg:"充电25度，消费25元"},
          {time:"12:42:17",msg:"充电45度，消费45元"},
          {time:"16:18:33",msg:"充电35度，消费35元"},
          {time:"19:55:28",msg:"充电55度，消费55元"},
          {time:"23:32:15",msg:"充电65度，消费65元"},
        ]
      },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "26%",
        record:[
          {time:"07:28:28",msg:"充电28度，消费28元"},
          {time:"11:05:17",msg:"充电48度，消费48元"},
          {time:"14:42:33",msg:"充电38度，消费38元"},
          {time:"18:18:42",msg:"充电58度，消费58元"},
        ]
      },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "55%",
        record:[
          {time:"09:52:15",msg:"充电21度，消费21元"},
          {time:"13:28:33",msg:"充电41度，消费41元"},
          {time:"17:05:28",msg:"充电31度，消费31元"},
          {time:"20:42:42",msg:"充电51度，消费51元"},
          {time:"00:18:17",msg:"充电61度，消费61元"},
        ]
      },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "58%",
        record:[
          {time:"08:15:42",msg:"充电34度，消费34元"},
          {time:"11:52:17",msg:"充电54度，消费54元"},
          {time:"15:28:33",msg:"充电44度，消费44元"},
          {time:"19:05:28",msg:"充电64度，消费64元"},
        ]
      },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3,
        record:[
          {time:"09:38:28",msg:"充电17度，消费17元"},
          {time:"13:15:15",msg:"充电37度，消费37元"},
          {time:"16:52:42",msg:"充电27度，消费27元"},
          {time:"20:28:33",msg:"充电47度，消费47元"},
          {time:"00:05:18",msg:"充电57度，消费57元"},
        ]
      },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "81%",
        record:[
          {time:"07:02:17",msg:"充电30度，消费30元"},
          {time:"10:38:33",msg:"充电50度，消费50元"},
          {time:"14:15:28",msg:"充电40度，消费40元"},
          {time:"17:52:42",msg:"充电60度，消费60元"},
        ]
      },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"10:25:15",msg:"充电23度，消费23元"},
          {time:"14:02:33",msg:"充电43度，消费43元"},
          {time:"17:38:28",msg:"充电33度，消费33元"},
          {time:"21:15:42",msg:"充电53度，消费53元"},
          {time:"00:52:17",msg:"充电63度，消费63元"},
        ]
      },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"07:48:42",msg:"充电36度，消费36元"},
          {time:"11:25:17",msg:"充电56度，消费56元"},
          {time:"15:02:33",msg:"充电46度，消费46元"},
          {time:"18:38:28",msg:"充电66度，消费66元"},
        ]
      },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:12:28",msg:"充电19度，消费19元"},
          {time:"12:48:15",msg:"充电39度，消费39元"},
          {time:"16:25:42",msg:"充电29度，消费29元"},
          {time:"20:02:33",msg:"充电49度，消费49元"},
          {time:"23:38:18",msg:"充电59度，消费59元"},
        ]
      },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4,
        record:[
          {time:"07:35:17",msg:"充电32度，消费32元"},
          {time:"11:12:33",msg:"充电52度，消费52元"},
          {time:"14:48:28",msg:"充电42度，消费42元"},
          {time:"18:25:42",msg:"充电62度，消费62元"},
        ]
      },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:58:15",msg:"充电25度，消费25元"},
          {time:"13:35:33",msg:"充电45度，消费45元"},
          {time:"17:12:28",msg:"充电35度，消费35元"},
          {time:"20:48:42",msg:"充电55度，消费55元"},
          {time:"00:25:17",msg:"充电65度，消费65元"},
        ]
      },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5,
        record:[
          {time:"08:22:42",msg:"充电28度，消费28元"},
          {time:"11:58:17",msg:"充电48度，消费48元"},
          {time:"15:35:33",msg:"充电38度，消费38元"},
          {time:"19:12:28",msg:"充电58度，消费58元"},
        ]
      },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1,
        record:[
          {time:"09:45:28",msg:"充电31度，消费31元"},
          {time:"13:22:15",msg:"充电51度，消费51元"},
          {time:"16:58:42",msg:"充电41度，消费41元"},
          {time:"20:35:33",msg:"充电61度，消费61元"},
          {time:"00:12:18",msg:"充电71度，消费71元"},
        ]
      },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "81%",
        record:[
          {time:"07:08:17",msg:"充电34度，消费34元"},
          {time:"10:45:33",msg:"充电54度，消费54元"},
          {time:"14:22:28",msg:"充电44度，消费44元"},
          {time:"17:58:42",msg:"充电64度，消费64元"},
        ]
      },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"10:32:15",msg:"充电27度，消费27元"},
          {time:"14:08:33",msg:"充电47度，消费47元"},
          {time:"17:45:28",msg:"充电37度，消费37元"},
          {time:"21:22:42",msg:"充电57度，消费57元"},
          {time:"00:58:17",msg:"充电67度，消费67元"},
        ]
      },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"07:55:42",msg:"充电20度，消费20元"},
          {time:"11:32:17",msg:"充电40度，消费40元"},
          {time:"15:08:33",msg:"充电30度，消费30元"},
          {time:"18:45:28",msg:"充电50度，消费50元"},
        ]
      },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6,
        record:[
          {time:"09:18:28",msg:"充电23度，消费23元"},
          {time:"12:55:15",msg:"充电43度，消费43元"},
          {time:"16:32:42",msg:"充电33度，消费33元"},
          {time:"20:08:33",msg:"充电53度，消费53元"},
          {time:"23:45:18",msg:"充电63度，消费63元"},
        ]
      },
    ],
  },
  {
    id: "VXZ10016",
    name: "苏州园区充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "50%" },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "29%" },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "24%" },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "94%" },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3 },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "84%" },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5 },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "77%" },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
    ],
  },
  {
    id: "VXZ10017",
    name: "昆明滇池充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "52%" },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "48%" },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "26%" },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "35%" },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3 },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "68%" },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5 },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "31%" },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
    ],
  },
  {
    id: "VXZ10018",
    name: "南宁青秀山充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "29%" },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "53%" },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "76%" },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "40%" },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3 },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "39%" },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5 },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "32%" },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
    ],
  },
  {
    id: "VXZ10019",
    name: "长沙橘子洲头充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "47%" },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "16%" },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "30%" },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "26%" },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3 },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "84%" },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5 },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "44%" },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
    ],
  },
  {
    id: "VXZ10020",
    name: "哈尔滨中央大街充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "93%" },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "45%" },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "15%" },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "33%" },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3 },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "82%" },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5 },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "31%" },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
    ],
  },
  {
    id: "VXZ10021",
    name: "石家庄正定古城充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "39%" },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "60%" },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "90%" },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "42%" },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3 },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "36%" },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5 },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "56%" },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
    ],
  },
  {
    id: "VXZ10022",
    name: "兰州黄河桥充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "72%" },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "42%" },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "66%" },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "60%" },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3 },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "59%" },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5 },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "15%" },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
    ],
  },
  {
    id: "VXZ10023",
    name: "济南大明湖充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "39%" },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "67%" },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "60%" },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "93%" },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3 },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "51%" },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5 },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "36%" },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
    ],
  },
  {
    id: "VXZ10024",
    name: "沈阳故宫充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "60%" },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "39%" },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "15%" },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "75%" },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3 },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "33%" },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5 },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "82%" },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
    ],
  },
  {
    id: "VXZ10025",
    name: "福州西湖充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "54%" },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "45%" },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "95%" },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "62%" },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3 },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "71%" },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5 },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "55%" },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
    ],
  },
  {
    id: "VXZ10026",
    name: "无锡灵山大佛充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "86%" },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "54%" },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "50%" },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "16%" },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3 },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "57%" },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5 },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "33%" },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
    ],
  },
  {
    id: "VXZ10027",
    name: "郑州二七广场充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "25%" },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "37%" },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "90%" },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "47%" },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3 },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "65%" },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5 },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "50%" },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
    ],
  },
  {
    id: "VXZ10028",
    name: "大连星海广场充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "38%" },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "46%" },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "24%" },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "74%" },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3 },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "27%" },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5 },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "56%" },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
    ],
  },
  {
    id: "VXZ10029",
    name: "宁波天一广场充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "36%" },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "92%" },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "60%" },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "15%" },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3 },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "56%" },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5 },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "29%" },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
    ],
  },
  {
    id: "VXZ10030",
    name: "贵阳甲秀楼充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "68%" },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "22%" },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "45%" },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "38%" },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3 },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "20%" },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5 },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "80%" },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
    ],
  },
  {
    id: "VXZ10031",
    name: "珠海长隆海洋王国充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "88%" },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "60%" },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "40%" },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "60%" },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3 },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "90%" },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5 },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "10%" },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
    ],
  },
  {
    id: "VXZ10032",
    name: "天津滨海新区充电站",
    list: [
      { id: "CD1001", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },//1空闲 2充电中 3连接中 4排队中 5被预约 6故障/离线
      { id: "CD1002", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "50%" },
      { id: "CD1003", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1004", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "54%" },
      { id: "CD1005", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "20%" },
      { id: "CD1006", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "80%" },
      { id: "CD1007", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 3 },
      { id: "CD1008", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "60%" },
      { id: "CD1009", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1010", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1011", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1012", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 4 },
      { id: "CD1013", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1014", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 5 },
      { id: "CD1015", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 1 },
      { id: "CD1016", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 2, percent: "26%" },
      { id: "CD1017", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1018", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
      { id: "CD1019", voltage: "314v", current: "212.2A", power: "21KW", tem: "32°c", status: 6 },
    ],
  },

]
//充电桩列表接口
Mock.mock("https://www.demo.com/currentList", "post", () => {
  return {
    code: 200,
    success: true,
    data: chargingPile
  }
})

const stations = [
  {
    position: [116.395645, 39.90923], // 北京（虚拟坐标）
    title: "北京西单充电站",
    status: 1,
    count: 135,
  },
  {
    position: [121.491121, 31.236222], // 上海（虚拟坐标）
    title: "上海陆家嘴充电站",
    status: 2,
    count: 125,
  },
  {
    position: [113.324520, 23.097418], // 广州（虚拟坐标）
    title: "广州花城广场充电站",
    status: 2,
    count: 123,
  },
  {
    position: [114.156836, 22.283758], // 深圳（虚拟坐标）
    title: "深圳大梅沙充电站",
    status: 1,
    count: 110,
  },
  {
    position: [104.065735, 30.659462], // 成都（虚拟坐标）
    title: "成都天府广场充电站",
    status: 5,
    count: 125,
  },
  {
    position: [108.948024, 34.263161], // 西安（虚拟坐标）
    title: "西安钟楼充电站",
    status: 4,
    count: 115,
  },
  {
    position: [120.155070, 30.274084], // 杭州（虚拟坐标）
    title: "杭州西湖充电站",
    status: 1,
    count: 104,
  },
  {
    position: [118.796877, 32.060255], // 南京（虚拟坐标）
    title: "南京夫子庙充电站",
    status: 2,
    count: 129,
  },
  {
    position: [117.200983, 39.084158], // 天津（虚拟坐标）
    title: "天津意大利风情区充电站",
    status: 2,
    count: 123,
  },
  {
    position: [120.308949, 36.065319], // 青岛（虚拟坐标）
    title: "青岛栈桥充电站",
    status: 1,
    count: 123,
  },
  {
    position: [114.305393, 30.593099], // 武汉（虚拟坐标）
    title: "武汉黄鹤楼充电站",
    status: 2,
    count: 102,
  },
  {
    position: [119.296494, 26.074507], // 福州（虚拟坐标）
    title: "福州三坊七巷充电站",
    status: 4,
    count: 107,
  },
  {
    position: [117.283042, 31.86119], // 合肥（虚拟坐标）
    title: "合肥包公园充电站",
    status: 2,
    count: 100,
  },
  {
    position: [106.551556, 29.563009], // 重庆（真实坐标）
    title: "重庆解放碑充电站",
    status: 2,
    count: 117,
  },
  {
    position: [110.290195, 25.273566], // 桂林（虚拟坐标）
    title: "桂林漓江充电站",
    status: 2,
    count: 106,
  },
  {
    position: [120.619585, 31.299379], // 苏州（虚拟坐标）
    title: "苏州园区充电站",
    status: 2,
    count: 115,
  },
  {
    position: [102.833218, 24.879659], // 昆明（虚拟坐标）
    title: "昆明滇池充电站",
    status: 1,
    count: 112,
  },
  {
    position: [108.327546, 22.815478], // 南宁（虚拟坐标）
    title: "南宁青秀山充电站",
    status: 2,
    count: 117,
  },
  {
    position: [112.938814, 28.228209], // 长沙（虚拟坐标）
    title: "长沙橘子洲头充电站",
    status: 2,
    count: 112,
  },
  {
    position: [126.534967, 45.802664], // 哈尔滨（虚拟坐标）
    title: "哈尔滨中央大街充电站",
    status: 2,
    count: 107,
  },
  {
    position: [114.514859, 38.042306], // 石家庄（虚拟坐标）
    title: "石家庄正定古城充电站",
    status: 4,
    count: 103,
  },
  {
    position: [103.834302, 36.061089], // 兰州（虚拟坐标）
    title: "兰州黄河桥充电站",
    status: 5,
    count: 126,
  },
  {
    position: [116.994929, 36.682785], // 济南（虚拟坐标）
    title: "济南大明湖充电站",
    status: 1,
    count: 132,
  },
  {
    position: [123.431474, 41.805699], // 沈阳（虚拟坐标）
    title: "沈阳故宫充电站",
    status: 4,
    count: 108,
  },
  {
    position: [119.302444, 26.080429], // 福州（虚拟坐标）
    title: "福州西湖充电站",
    status: 2,
    count: 113,
  },
  {
    position: [120.31191, 31.498809], // 无锡（虚拟坐标）
    title: "无锡灵山大佛充电站",
    status: 1,
    count: 123,
  },
  {
    position: [113.558519, 34.857641], // 郑州（虚拟坐标）
    title: "郑州二七广场充电站",
    status: 1,
    count: 120,
  },
  {
    position: [121.614682, 38.914003], // 大连（虚拟坐标）
    title: "大连星海广场充电站",
    status: 2,
    count: 117,
  },
  {
    position: [121.551918, 29.874058], // 宁波（虚拟坐标）
    title: "宁波天一广场充电站",
    status: 4,
    count: 130,
  },
  {
    position: [106.713478, 26.578343], // 贵阳（虚拟坐标）
    title: "贵阳甲秀楼充电站",
    status: 1,
    count: 114,
  },
  {
    position: [113.58239, 22.276949], // 珠海（虚拟坐标）
    title: "珠海长隆海洋王国充电站",
    status: 1,
    count: 114,
  },
  {
    position: [117.701648, 39.041746], // 天津（虚拟坐标）
    title: "天津滨海新区充电站",
    status: 1,
    count: 129,
  },
];
//电子地图接口
Mock.mock("https://www.demo.com/mapList", "post", () => {
  return {
    code: 200,
    success: true,
    data: stations
  }
})


//订单管理接口
// 固定的订单数据 - 120条2025年的数据
let orderList = [
  // 1月份订单 (10条)
  { orderNo: "177862", date: "2025-01-05", startTime: "08:00:23", endTime: "09:10:11", equipmentNo: "C227", money: "88.9", pay: "储值卡", status: 2, name: "北京西单充电站" },
  { orderNo: "701968", date: "2025-01-08", startTime: "09:15:30", endTime: "10:45:22", equipmentNo: "B109", money: "66.5", pay: "微信", status: 3, name: "上海陆家嘴充电站" },
  { orderNo: "386693", date: "2025-01-12", startTime: "14:20:15", endTime: "15:30:45", equipmentNo: "D158", money: "45.8", pay: "储值卡", status: 4, name: "广州花城广场充电站" },
  { orderNo: "875957", date: "2025-01-15", startTime: "16:30:12", endTime: "17:45:33", equipmentNo: "C106", money: "72.3", pay: "微信", status: 3, name: "深圳大梅沙充电站" },
  { orderNo: "458677", date: "2025-01-18", startTime: "11:45:28", endTime: "12:55:17", equipmentNo: "A205", money: "36.5", pay: "支付宝", status: 2, name: "成都天府广场充电站" },
  { orderNo: "462592", date: "2025-01-22", startTime: "13:20:45", endTime: "14:35:22", equipmentNo: "E301", money: "54.7", pay: "储值卡", status: 3, name: "西安钟楼充电站" },
  { orderNo: "707848", date: "2025-01-25", startTime: "10:15:33", endTime: "11:25:18", equipmentNo: "F402", money: "88.9", pay: "支付宝", status: 4, name: "杭州西湖充电站" },
  { orderNo: "715711", date: "2025-01-28", startTime: "15:40:27", endTime: "16:50:15", equipmentNo: "G503", money: "29.8", pay: "微信", status: 2, name: "南京夫子庙充电站" },
  { orderNo: "705388", date: "2025-01-30", startTime: "12:30:18", endTime: "13:40:25", equipmentNo: "H604", money: "67.2", pay: "储值卡", status: 3, name: "天津意大利风情区充电站" },
  { orderNo: "892456", date: "2025-01-31", startTime: "17:25:42", endTime: "18:35:28", equipmentNo: "I705", money: "43.6", pay: "微信", status: 4, name: "青岛栈桥充电站" },

  // 2月份订单 (10条)
  { orderNo: "234567", date: "2025-02-03", startTime: "08:45:15", endTime: "09:55:33", equipmentNo: "C227", money: "52.4", pay: "支付宝", status: 2, name: "武汉黄鹤楼充电站" },
  { orderNo: "345678", date: "2025-02-07", startTime: "14:15:28", endTime: "15:25:45", equipmentNo: "B109", money: "78.9", pay: "微信", status: 3, name: "福州三坊七巷充电站" },
  { orderNo: "456789", date: "2025-02-10", startTime: "11:30:42", endTime: "12:40:18", equipmentNo: "D158", money: "34.7", pay: "储值卡", status: 4, name: "合肥包公园充电站" },
  { orderNo: "567890", date: "2025-02-14", startTime: "16:20:35", endTime: "17:30:22", equipmentNo: "C106", money: "91.3", pay: "支付宝", status: 2, name: "重庆解放碑充电站" },
  { orderNo: "678901", date: "2025-02-17", startTime: "09:50:18", endTime: "11:00:45", equipmentNo: "A205", money: "46.8", pay: "微信", status: 3, name: "桂林漓江充电站" },
  { orderNo: "789012", date: "2025-02-20", startTime: "13:40:27", endTime: "14:50:15", equipmentNo: "E301", money: "63.2", pay: "储值卡", status: 4, name: "苏州园区充电站" },
  { orderNo: "890123", date: "2025-02-23", startTime: "15:25:33", endTime: "16:35:28", equipmentNo: "F402", money: "27.9", pay: "支付宝", status: 2, name: "昆明滇池充电站" },
  { orderNo: "901234", date: "2025-02-26", startTime: "10:35:42", endTime: "11:45:18", equipmentNo: "G503", money: "85.6", pay: "微信", status: 3, name: "南宁青秀山充电站" },
  { orderNo: "012345", date: "2025-02-27", startTime: "12:15:25", endTime: "13:25:33", equipmentNo: "H604", money: "39.4", pay: "储值卡", status: 4, name: "长沙橘子洲头充电站" },
  { orderNo: "123456", date: "2025-02-28", startTime: "17:45:18", endTime: "18:55:42", equipmentNo: "I705", money: "71.8", pay: "支付宝", status: 2, name: "哈尔滨中央大街充电站" },

  // 3月份订单 (10条)
  { orderNo: "234567", date: "2025-03-02", startTime: "08:20:33", endTime: "09:30:15", equipmentNo: "J806", money: "58.7", pay: "微信", status: 3, name: "石家庄正定古城充电站" },
  { orderNo: "345678", date: "2025-03-05", startTime: "14:50:28", endTime: "16:00:42", equipmentNo: "K907", money: "42.3", pay: "储值卡", status: 4, name: "兰州黄河桥充电站" },
  { orderNo: "456789", date: "2025-03-08", startTime: "11:10:45", endTime: "12:20:18", equipmentNo: "L108", money: "76.9", pay: "支付宝", status: 2, name: "济南大明湖充电站" },
  { orderNo: "567890", date: "2025-03-12", startTime: "16:40:22", endTime: "17:50:35", equipmentNo: "M209", money: "33.6", pay: "微信", status: 3, name: "沈阳故宫充电站" },
  { orderNo: "678901", date: "2025-03-15", startTime: "09:25:18", endTime: "10:35:45", equipmentNo: "N310", money: "89.2", pay: "储值卡", status: 4, name: "福州西湖充电站" },
  { orderNo: "789012", date: "2025-03-18", startTime: "13:15:33", endTime: "14:25:28", equipmentNo: "O411", money: "47.8", pay: "支付宝", status: 2, name: "无锡灵山大佛充电站" },
  { orderNo: "890123", date: "2025-03-22", startTime: "15:55:42", endTime: "17:05:15", equipmentNo: "P512", money: "64.5", pay: "微信", status: 3, name: "郑州二七广场充电站" },
  { orderNo: "901234", date: "2025-03-25", startTime: "10:05:28", endTime: "11:15:33", equipmentNo: "Q613", money: "28.7", pay: "储值卡", status: 4, name: "大连星海广场充电站" },
  { orderNo: "012345", date: "2025-03-28", startTime: "12:45:15", endTime: "13:55:42", equipmentNo: "R714", money: "82.4", pay: "支付宝", status: 2, name: "宁波天一广场充电站" },
  { orderNo: "123456", date: "2025-03-30", startTime: "17:20:33", endTime: "18:30:18", equipmentNo: "S815", money: "36.9", pay: "微信", status: 3, name: "贵阳甲秀楼充电站" },

  // 4月份订单 (10条)
  { orderNo: "987654", date: "2025-04-02", startTime: "08:35:45", endTime: "09:45:22", equipmentNo: "T916", money: "73.6", pay: "储值卡", status: 4, name: "珠海长隆海洋王国充电站" },
  { orderNo: "876543", date: "2025-04-05", startTime: "14:25:18", endTime: "15:35:33", equipmentNo: "U017", money: "41.2", pay: "支付宝", status: 2, name: "天津滨海新区充电站" },
  { orderNo: "765432", date: "2025-04-08", startTime: "11:55:42", endTime: "13:05:15", equipmentNo: "V118", money: "87.8", pay: "微信", status: 3, name: "北京西单充电站" },
  { orderNo: "654321", date: "2025-04-12", startTime: "16:15:28", endTime: "17:25:45", equipmentNo: "W219", money: "29.5", pay: "储值卡", status: 4, name: "上海陆家嘴充电站" },
  { orderNo: "543210", date: "2025-04-15", startTime: "09:40:33", endTime: "10:50:18", equipmentNo: "X320", money: "65.7", pay: "支付宝", status: 2, name: "广州花城广场充电站" },
  { orderNo: "432109", date: "2025-04-18", startTime: "13:30:15", endTime: "14:40:42", equipmentNo: "Y421", money: "48.3", pay: "微信", status: 3, name: "深圳大梅沙充电站" },
  { orderNo: "321098", date: "2025-04-22", startTime: "15:10:28", endTime: "16:20:35", equipmentNo: "Z522", money: "79.9", pay: "储值卡", status: 4, name: "成都天府广场充电站" },
  { orderNo: "210987", date: "2025-04-25", startTime: "10:50:45", endTime: "12:00:22", equipmentNo: "AA623", money: "34.8", pay: "支付宝", status: 2, name: "西安钟楼充电站" },
  { orderNo: "109876", date: "2025-04-28", startTime: "12:20:18", endTime: "13:30:33", equipmentNo: "BB724", money: "91.6", pay: "微信", status: 3, name: "杭州西湖充电站" },
  { orderNo: "098765", date: "2025-04-30", startTime: "17:35:42", endTime: "18:45:15", equipmentNo: "CC825", money: "37.4", pay: "储值卡", status: 4, name: "南京夫子庙充电站" },

  // 5月份订单 (10条)
  { orderNo: "147258", date: "2025-05-03", startTime: "08:15:28", endTime: "09:25:45", equipmentNo: "DD926", money: "68.2", pay: "支付宝", status: 2, name: "天津意大利风情区充电站" },
  { orderNo: "258369", date: "2025-05-06", startTime: "14:45:33", endTime: "15:55:18", equipmentNo: "EE027", money: "43.7", pay: "微信", status: 3, name: "青岛栈桥充电站" },
  { orderNo: "369147", date: "2025-05-09", startTime: "11:25:42", endTime: "12:35:28", equipmentNo: "FF128", money: "85.3", pay: "储值卡", status: 4, name: "武汉黄鹤楼充电站" },
  { orderNo: "147852", date: "2025-05-12", startTime: "16:05:15", endTime: "17:15:33", equipmentNo: "GG229", money: "31.9", pay: "支付宝", status: 2, name: "福州三坊七巷充电站" },
  { orderNo: "258963", date: "2025-05-15", startTime: "09:55:28", endTime: "11:05:42", equipmentNo: "HH330", money: "77.6", pay: "微信", status: 3, name: "合肥包公园充电站" },
  { orderNo: "369741", date: "2025-05-18", startTime: "13:35:45", endTime: "14:45:18", equipmentNo: "II431", money: "44.8", pay: "储值卡", status: 4, name: "重庆解放碑充电站" },
  { orderNo: "741852", date: "2025-05-22", startTime: "15:20:33", endTime: "16:30:28", equipmentNo: "JJ532", money: "92.4", pay: "支付宝", status: 2, name: "桂林漓江充电站" },
  { orderNo: "852963", date: "2025-05-25", startTime: "10:40:15", endTime: "11:50:42", equipmentNo: "KK633", money: "38.6", pay: "微信", status: 3, name: "苏州园区充电站" },
  { orderNo: "963741", date: "2025-05-28", startTime: "12:00:28", endTime: "13:10:35", equipmentNo: "LL734", money: "74.2", pay: "储值卡", status: 4, name: "昆明滇池充电站" },
  { orderNo: "159753", date: "2025-05-30", startTime: "17:50:45", endTime: "19:00:18", equipmentNo: "MM835", money: "26.7", pay: "支付宝", status: 2, name: "南宁青秀山充电站" },

  // 6月份订单 (10条)
  { orderNo: "753159", date: "2025-06-02", startTime: "08:25:33", endTime: "09:35:28", equipmentNo: "NN936", money: "81.5", pay: "微信", status: 3, name: "长沙橘子洲头充电站" },
  { orderNo: "951357", date: "2025-06-05", startTime: "14:55:42", endTime: "16:05:15", equipmentNo: "OO037", money: "49.3", pay: "储值卡", status: 4, name: "哈尔滨中央大街充电站" },
  { orderNo: "357951", date: "2025-06-08", startTime: "11:15:18", endTime: "12:25:33", equipmentNo: "PP138", money: "66.8", pay: "支付宝", status: 2, name: "石家庄正定古城充电站" },
  { orderNo: "159357", date: "2025-06-12", startTime: "16:35:28", endTime: "17:45:42", equipmentNo: "QQ239", money: "32.4", pay: "微信", status: 3, name: "兰州黄河桥充电站" },
  { orderNo: "357159", date: "2025-06-15", startTime: "09:05:45", endTime: "10:15:18", equipmentNo: "RR340", money: "88.7", pay: "储值卡", status: 4, name: "济南大明湖充电站" },
  { orderNo: "951753", date: "2025-06-18", startTime: "13:45:33", endTime: "14:55:28", equipmentNo: "SS441", money: "45.9", pay: "支付宝", status: 2, name: "沈阳故宫充电站" },
  { orderNo: "753951", date: "2025-06-22", startTime: "15:25:42", endTime: "16:35:15", equipmentNo: "TT542", money: "73.1", pay: "微信", status: 3, name: "福州西湖充电站" },
  { orderNo: "159951", date: "2025-06-25", startTime: "10:15:28", endTime: "11:25:45", equipmentNo: "UU643", money: "39.7", pay: "储值卡", status: 4, name: "无锡灵山大佛充电站" },
  { orderNo: "951159", date: "2025-06-28", startTime: "12:55:33", endTime: "14:05:18", equipmentNo: "VV744", money: "95.3", pay: "支付宝", status: 2, name: "郑州二七广场充电站" },
  { orderNo: "753357", date: "2025-06-30", startTime: "17:10:42", endTime: "18:20:28", equipmentNo: "WW845", money: "28.6", pay: "微信", status: 3, name: "大连星海广场充电站" },

  // 7月份订单 (10条)
  { orderNo: "486213", date: "2025-07-03", startTime: "08:40:15", endTime: "09:50:33", equipmentNo: "XX946", money: "62.4", pay: "储值卡", status: 4, name: "宁波天一广场充电站" },
  { orderNo: "213486", date: "2025-07-06", startTime: "14:20:28", endTime: "15:30:42", equipmentNo: "YY047", money: "47.8", pay: "支付宝", status: 2, name: "贵阳甲秀楼充电站" },
  { orderNo: "864213", date: "2025-07-09", startTime: "11:00:45", endTime: "12:10:18", equipmentNo: "ZZ148", money: "84.6", pay: "微信", status: 3, name: "珠海长隆海洋王国充电站" },
  { orderNo: "213864", date: "2025-07-12", startTime: "16:50:33", endTime: "18:00:15", equipmentNo: "AAA249", money: "35.2", pay: "储值卡", status: 4, name: "天津滨海新区充电站" },
  { orderNo: "486864", date: "2025-07-15", startTime: "09:30:28", endTime: "10:40:42", equipmentNo: "BBB350", money: "71.9", pay: "支付宝", status: 2, name: "北京西单充电站" },
  { orderNo: "864486", date: "2025-07-18", startTime: "13:10:45", endTime: "14:20:18", equipmentNo: "CCC451", money: "53.7", pay: "微信", status: 3, name: "上海陆家嘴充电站" },
  { orderNo: "213213", date: "2025-07-22", startTime: "15:40:33", endTime: "16:50:28", equipmentNo: "DDD552", money: "90.1", pay: "储值卡", status: 4, name: "广州花城广场充电站" },
  { orderNo: "486486", date: "2025-07-25", startTime: "10:20:15", endTime: "11:30:42", equipmentNo: "EEE653", money: "41.5", pay: "支付宝", status: 2, name: "深圳大梅沙充电站" },
  { orderNo: "864864", date: "2025-07-28", startTime: "12:35:28", endTime: "13:45:45", equipmentNo: "FFF754", money: "78.3", pay: "微信", status: 3, name: "成都天府广场充电站" },
  { orderNo: "135792", date: "2025-07-30", startTime: "17:25:33", endTime: "18:35:18", equipmentNo: "GGG855", money: "24.8", pay: "储值卡", status: 4, name: "西安钟楼充电站" },

  // 8月份订单 (10条)
  { orderNo: "792468", date: "2025-08-02", startTime: "08:55:42", endTime: "10:05:28", equipmentNo: "HHH956", money: "67.6", pay: "支付宝", status: 2, name: "杭州西湖充电站" },
  { orderNo: "468135", date: "2025-08-05", startTime: "14:35:15", endTime: "15:45:33", equipmentNo: "III057", money: "42.9", pay: "微信", status: 3, name: "南京夫子庙充电站" },
  { orderNo: "135468", date: "2025-08-08", startTime: "11:45:28", endTime: "12:55:42", equipmentNo: "JJJ158", money: "86.4", pay: "储值卡", status: 4, name: "天津意大利风情区充电站" },
  { orderNo: "792135", date: "2025-08-12", startTime: "16:25:45", endTime: "17:35:18", equipmentNo: "KKK259", money: "33.7", pay: "支付宝", status: 2, name: "青岛栈桥充电站" },
  { orderNo: "468792", date: "2025-08-15", startTime: "09:15:33", endTime: "10:25:28", equipmentNo: "LLL360", money: "75.2", pay: "微信", status: 3, name: "武汉黄鹤楼充电站" },
  { orderNo: "135792", date: "2025-08-18", startTime: "13:55:42", endTime: "15:05:15", equipmentNo: "MMM461", money: "48.6", pay: "储值卡", status: 4, name: "福州三坊七巷充电站" },
  { orderNo: "792792", date: "2025-08-22", startTime: "15:05:28", endTime: "16:15:33", equipmentNo: "NNN562", money: "93.8", pay: "支付宝", status: 2, name: "合肥包公园充电站" },
  { orderNo: "468468", date: "2025-08-25", startTime: "10:45:45", endTime: "11:55:18", equipmentNo: "OOO663", money: "37.1", pay: "微信", status: 3, name: "重庆解放碑充电站" },
  { orderNo: "135135", date: "2025-08-28", startTime: "12:25:33", endTime: "13:35:42", equipmentNo: "PPP764", money: "69.5", pay: "储值卡", status: 4, name: "桂林漓江充电站" },
  { orderNo: "246810", date: "2025-08-30", startTime: "17:40:28", endTime: "18:50:15", equipmentNo: "QQQ865", money: "25.3", pay: "支付宝", status: 2, name: "苏州园区充电站" },

  // 9月份订单 (10条)
  { orderNo: "810246", date: "2025-09-02", startTime: "08:10:45", endTime: "09:20:33", equipmentNo: "RRR966", money: "82.7", pay: "微信", status: 3, name: "昆明滇池充电站" },
  { orderNo: "024681", date: "2025-09-05", startTime: "14:50:18", endTime: "16:00:28", equipmentNo: "SSS067", money: "46.4", pay: "储值卡", status: 4, name: "南宁青秀山充电站" },
  { orderNo: "681024", date: "2025-09-08", startTime: "11:30:33", endTime: "12:40:42", equipmentNo: "TTT168", money: "74.9", pay: "支付宝", status: 2, name: "长沙橘子洲头充电站" },
  { orderNo: "246024", date: "2025-09-12", startTime: "16:10:15", endTime: "17:20:45", equipmentNo: "UUU269", money: "38.8", pay: "微信", status: 3, name: "哈尔滨中央大街充电站" },
  { orderNo: "810681", date: "2025-09-15", startTime: "09:50:28", endTime: "11:00:33", equipmentNo: "VVV370", money: "91.6", pay: "储值卡", status: 4, name: "石家庄正定古城充电站" },
  { orderNo: "024246", date: "2025-09-18", startTime: "13:20:42", endTime: "14:30:18", equipmentNo: "WWW471", money: "44.2", pay: "支付宝", status: 2, name: "兰州黄河桥充电站" },
  { orderNo: "681681", date: "2025-09-22", startTime: "15:00:45", endTime: "16:10:33", equipmentNo: "XXX572", money: "77.5", pay: "微信", status: 3, name: "济南大明湖充电站" },
  { orderNo: "246246", date: "2025-09-25", startTime: "10:35:28", endTime: "11:45:15", equipmentNo: "YYY673", money: "31.9", pay: "储值卡", status: 4, name: "沈阳故宫充电站" },
  { orderNo: "810810", date: "2025-09-28", startTime: "12:15:33", endTime: "13:25:42", equipmentNo: "ZZZ774", money: "88.3", pay: "支付宝", status: 2, name: "福州西湖充电站" },
  { orderNo: "024024", date: "2025-09-30", startTime: "17:55:18", endTime: "19:05:28", equipmentNo: "AAAA875", money: "22.7", pay: "微信", status: 3, name: "无锡灵山大佛充电站" },

  // 10月份订单 (10条)
  { orderNo: "369258", date: "2025-10-03", startTime: "08:30:42", endTime: "09:40:15", equipmentNo: "BBBB976", money: "65.1", pay: "储值卡", status: 4, name: "郑州二七广场充电站" },
  { orderNo: "258147", date: "2025-10-06", startTime: "14:10:28", endTime: "15:20:33", equipmentNo: "CCCC077", money: "49.7", pay: "支付宝", status: 2, name: "大连星海广场充电站" },
  { orderNo: "147369", date: "2025-10-09", startTime: "11:50:45", endTime: "13:00:18", equipmentNo: "DDDD178", money: "83.4", pay: "微信", status: 3, name: "宁波天一广场充电站" },
  { orderNo: "369147", date: "2025-10-12", startTime: "16:40:33", endTime: "17:50:28", equipmentNo: "EEEE279", money: "36.6", pay: "储值卡", status: 4, name: "贵阳甲秀楼充电站" },
  { orderNo: "258369", date: "2025-10-15", startTime: "09:20:15", endTime: "10:30:42", equipmentNo: "FFFF380", money: "72.8", pay: "支付宝", status: 2, name: "珠海长隆海洋王国充电站" },
  { orderNo: "147258", date: "2025-10-18", startTime: "13:00:28", endTime: "14:10:45", equipmentNo: "GGGG481", money: "51.3", pay: "微信", status: 3, name: "天津滨海新区充电站" },
  { orderNo: "369369", date: "2025-10-22", startTime: "15:35:33", endTime: "16:45:18", equipmentNo: "HHHH582", money: "94.7", pay: "储值卡", status: 4, name: "北京西单充电站" },
  { orderNo: "258258", date: "2025-10-25", startTime: "10:55:42", endTime: "12:05:28", equipmentNo: "IIII683", money: "40.9", pay: "支付宝", status: 2, name: "上海陆家嘴充电站" },
  { orderNo: "147147", date: "2025-10-28", startTime: "12:40:15", endTime: "13:50:33", equipmentNo: "JJJJ784", money: "76.2", pay: "微信", status: 3, name: "广州花城广场充电站" },
  { orderNo: "987321", date: "2025-10-30", startTime: "17:15:28", endTime: "18:25:42", equipmentNo: "KKKK885", money: "29.4", pay: "储值卡", status: 4, name: "深圳大梅沙充电站" },

  // 11月份订单 (10条)
  { orderNo: "321654", date: "2025-11-02", startTime: "08:45:33", endTime: "09:55:18", equipmentNo: "LLLL986", money: "68.5", pay: "支付宝", status: 2, name: "成都天府广场充电站" },
  { orderNo: "654987", date: "2025-11-05", startTime: "14:25:42", endTime: "15:35:28", equipmentNo: "MMMM087", money: "43.1", pay: "微信", status: 3, name: "西安钟楼充电站" },
  { orderNo: "987654", date: "2025-11-08", startTime: "11:05:15", endTime: "12:15:33", equipmentNo: "NNNN188", money: "85.8", pay: "储值卡", status: 4, name: "杭州西湖充电站" },
  { orderNo: "321987", date: "2025-11-12", startTime: "16:55:28", endTime: "18:05:42", equipmentNo: "OOOO289", money: "34.7", pay: "支付宝", status: 2, name: "南京夫子庙充电站" },
  { orderNo: "654321", date: "2025-11-15", startTime: "09:35:45", endTime: "10:45:18", equipmentNo: "PPPP390", money: "79.3", pay: "微信", status: 3, name: "天津意大利风情区充电站" },
  { orderNo: "987987", date: "2025-11-18", startTime: "13:15:33", endTime: "14:25:28", equipmentNo: "QQQQ491", money: "52.6", pay: "储值卡", status: 4, name: "青岛栈桥充电站" },
  { orderNo: "321321", date: "2025-11-22", startTime: "15:50:42", endTime: "17:00:15", equipmentNo: "RRRR592", money: "96.4", pay: "支付宝", status: 2, name: "武汉黄鹤楼充电站" },
  { orderNo: "654654", date: "2025-11-25", startTime: "10:10:28", endTime: "11:20:33", equipmentNo: "SSSS693", money: "39.8", pay: "微信", status: 3, name: "福州三坊七巷充电站" },
  { orderNo: "789456", date: "2025-11-28", startTime: "12:50:45", endTime: "14:00:18", equipmentNo: "TTTT794", money: "73.7", pay: "储值卡", status: 4, name: "合肥包公园充电站" },
  { orderNo: "456123", date: "2025-11-30", startTime: "17:30:33", endTime: "18:40:28", equipmentNo: "UUUU895", money: "27.2", pay: "支付宝", status: 2, name: "重庆解放碑充电站" },

  // 12月份订单 (10条)
  { orderNo: "123789", date: "2025-12-03", startTime: "08:20:15", endTime: "09:30:42", equipmentNo: "VVVV996", money: "61.9", pay: "微信", status: 3, name: "桂林漓江充电站" },
  { orderNo: "789456", date: "2025-12-06", startTime: "14:40:28", endTime: "15:50:45", equipmentNo: "WWWW097", money: "47.5", pay: "储值卡", status: 4, name: "苏州园区充电站" },
  { orderNo: "456789", date: "2025-12-09", startTime: "11:20:33", endTime: "12:30:18", equipmentNo: "XXXX198", money: "84.2", pay: "支付宝", status: 2, name: "昆明滇池充电站" },
  { orderNo: "123456", date: "2025-12-12", startTime: "16:00:42", endTime: "17:10:28", equipmentNo: "YYYY299", money: "35.8", pay: "微信", status: 3, name: "南宁青秀山充电站" },
  { orderNo: "789123", date: "2025-12-15", startTime: "09:45:15", endTime: "10:55:33", equipmentNo: "ZZZZ400", money: "78.6", pay: "储值卡", status: 4, name: "长沙橘子洲头充电站" },
  { orderNo: "456456", date: "2025-12-18", startTime: "13:25:28", endTime: "14:35:42", equipmentNo: "AAAAA501", money: "50.4", pay: "支付宝", status: 2, name: "哈尔滨中央大街充电站" },
  { orderNo: "123123", date: "2025-12-22", startTime: "15:15:45", endTime: "16:25:18", equipmentNo: "BBBBB602", money: "92.1", pay: "微信", status: 3, name: "石家庄正定古城充电站" },
  { orderNo: "789789", date: "2025-12-25", startTime: "10:25:33", endTime: "11:35:28", equipmentNo: "CCCCC703", money: "41.7", pay: "储值卡", status: 4, name: "兰州黄河桥充电站" },
  { orderNo: "456789", date: "2025-12-28", startTime: "12:05:42", endTime: "13:15:15", equipmentNo: "DDDDD804", money: "75.9", pay: "支付宝", status: 2, name: "济南大明湖充电站" },
  { orderNo: "999888", date: "2025-12-30", startTime: "17:45:28", endTime: "18:55:33", equipmentNo: "EEEEE905", money: "23.6", pay: "微信", status: 3, name: "沈阳故宫充电站" }
];

// 原始数据备份
const originalOrderList = JSON.parse(JSON.stringify(orderList));

Mock.mock('https://www.demo.com/orderList', 'post', (options: any) => {
  // 重置为原始数据
  orderList = JSON.parse(JSON.stringify(originalOrderList));

  const requestBody = JSON.parse(options.body);
  const { orderNo = "", status = 1, no = "", name = "", startDate = "", endDate = "", page = 1, pageSize = 10 } = requestBody;

  console.log("后端订单管理接到参数", requestBody);
  console.log("解构后的参数:", { orderNo, status, no, name, startDate, endDate, page, pageSize });
  console.log("原始订单数据长度:", orderList.length);

  // 根据搜索条件过滤数据
  if (orderNo) {
    console.log("按订单号过滤:", orderNo);
    orderList = orderList.filter(item => {
      const match = item.orderNo.includes(orderNo);
      console.log(`订单 ${item.orderNo} 是否匹配 ${orderNo}:`, match);
      return match;
    });
    console.log("按订单号过滤后数据长度:", orderList.length);
  }

  if (status !== 1) { // status=1表示"全部"
    console.log("按状态过滤:", status);
    orderList = orderList.filter(item => item.status === status);
    console.log("按状态过滤后数据长度:", orderList.length);
  }

  if (no) {
    console.log("按设备编号过滤:", no);
    orderList = orderList.filter(item => item.equipmentNo.includes(no));
    console.log("按设备编号过滤后数据长度:", orderList.length);
  }

  if (name) {
    console.log("按站点名称过滤:", name);
    orderList = orderList.filter(item => item.name.includes(name));
    console.log("按站点名称过滤后数据长度:", orderList.length);
  }

  if (startDate && endDate) {
    console.log("按日期范围过滤:", startDate, "到", endDate);
    orderList = orderList.filter(item => {
      const itemDate = new Date(item.date);
      const start = new Date(startDate);
      const end = new Date(endDate);
      return itemDate >= start && itemDate <= end;
    });
    console.log("按日期过滤后数据长度:", orderList.length);
  }

  // 实现分页
  const total = orderList.length;
  const start = (page - 1) * pageSize;
  const paginatedItems = orderList.slice(start, start + pageSize);

  console.log("最终返回数据:", { total, paginatedItems });

  return {
    code: 200,
    message: "成功",
    data: {
      list: paginatedItems,
      total
    }
  }
});


//订单管理-批量删除接口
Mock.mock('https://www.demo.com/batchDelete', "post", (options: any) => {
  const { order } = JSON.parse(options.body)
  console.log("订单管理批量删除接口",JSON.stringify(order) )
  return {
    code: 200,
    message: "成功",
    data: "操作成功"
  }
})

const cityList = [
  {
    label: "北京总部",
    children: [
      {
        label: "东城区",
        children: [
          { label: "东城区充电站01" },
          { label: "东城区充电站02" },
          { label: "东城区充电站03" },
          { label: "东城区充电站04" },
        ]
      },
      {
        label: "西城区",
        children: [
          { label: "西城区充电站01" },
          { label: "西城区充电站02" },
          { label: "西城区充电站03" },
        ]
      },
      {
        label: "朝阳区",
        children: [
          { label: "朝阳区充电站01" },
          { label: "朝阳区充电站02" },
          { label: "朝阳区充电站03" },
        ]
      },
      {
        label: "海淀区",
        children: [
          { label: "海淀区充电站01" },
          { label: "海淀区充电站02" },
        ]
      },
      {
        label: "丰台区",
        children: [
          { label: "丰台区充电站01" },
          { label: "丰台区充电站02" },
        ]
      }

    ]
  },
  {
    label: "深圳总部",
    children: [
      {
        label: "南山区",
        children: [
          {
            label: "南山区充电站01"
          }
        ]
      }, {
        label: "福田区",
        children: [
          {
            label: "福田区充电站01"
          }
        ]
      }
    ]
  }, {
    label: "青岛市",
    children: [
      {
        label: "市南区",
        children: [
          {
            label: "市南区充电站01"
          },
          {
            label: "市南区充电站02"
          }
        ]
      },
      {
        label: "市北区",
        children: [
          {
            label: "市北区充电站01"
          },
          {
            label: "市北区充电站02"
          }
        ]
      },
      {
        label: "崂山区",
        children: [
          {
            label: "崂山区充电站01"
          },
          {
            label: "崂山区充电站02"
          }
        ]
      }
    ]
  },
  {
    label: "武汉市",
    children: [
      {
        label: "武汉充电站01"
      },
      {
        label: "武汉充电站02"
      }, {
        label: "武汉充电站03"
      }
    ]
  }, {
    label: "成都市",
    children: [
      {
        label: "成都充电站01"
      },
      {
        label: "成都充电站02"
      }, {
        label: "成都充电站03"
      }
    ]
  },
  {
    label: "上海市",
    children: [
      {
        label: "上海充电站01"
      },
      {
        label: "上海充电站02"
      }, {
        label: "上海充电站03"
      }
    ]
  },
  {
    label: "长沙市",
    children: [
      {
        label: "长沙充电站01"
      },
      {
        label: "长沙充电站02"
      }, {
        label: "长沙充电站03"
      }
    ]
  }
]

//计费管理城市接口
Mock.mock('https://www.demo.com/cityList', "get", () => {
  return {
    code: 200,
    message: "操作成功",
    data: cityList
  }
})


//报警管理-报警列表接口
const alarmList = [
  {
    description: "充电桩拿不下来",
    address: "北京市东城区",
    equNo: "CD1001",
    level: 1,//1严重 2紧急 3一般
    time: "2024-09-15 09:33:24",
    code: 10023,//故障代码
    status: 1,//1待指派 2处理中 处理异常
  },
  {
    description: "电动车无法充电",
    address: "上海市浦东新区",
    equNo: "CD1002",
    level: 2,
    time: "2024-09-16 10:15:00",
    code: 10024,
    status: 2,
  },
  {
    description: "充电结束未通知",
    address: "广州市天河区",
    equNo: "CD1003",
    level: 3,
    time: "2024-09-17 11:28:45",
    code: 10025,
    status: 1,
  },
  {
    description: "设备显示屏故障",
    address: "深圳市南山区",
    equNo: "CD1004",
    level: 1,
    time: "2024-09-18 14:05:12",
    code: 10026,
    status: 1,
  },
  {
    description: "无法启动充电",
    address: "重庆市渝中区",
    equNo: "CD1005",
    level: 2,
    time: "2024-09-19 08:43:09",
    code: 10027,
    status: 2,
  },
  {
    description: "充电枪接触不良",
    address: "杭州市西湖区",
    equNo: "CD1006",
    level: 3,
    time: "2024-09-20 13:17:38",
    code: 10028,
    status: 3,
  },
  {
    description: "设备漏电报警",
    address: "成都市武侯区",
    equNo: "CD1007",
    level: 1,
    time: "2024-09-21 07:26:55",
    code: 10029,
    status: 2,
  },
]

Mock.mock('https://www.demo.com/alarmList', "get", () => {
  return {
    code: 200,
    message: "操作成功",
    data: alarmList
  }
})

//会员卡管理接口
Mock.mock('https://www.demo.com/member', 'post', (req:any) => {
  const { page, pageSize,no,tel,name } = JSON.parse(req.body);
  console.log("会员管理接口",page, pageSize,no,tel,name)
  return {
    "code": 200,
    "message": "操作成功",
    data: Mock.mock({
      [`list|${pageSize}`]:[{
        'memberCardNumber': '@id',  // 会员卡号
        'cardType|1': ["普通卡", "VIP卡", "季卡"],  // 卡类型
        'issueDate': '@date("yyyy-MM-dd")',  // 开卡日期
        'holderName': '@cname',  // 持有人姓名
        'holderPhone': /^1[3-9]\d{9}$/,  // 持有人电话
        'cardBalance': '@float(100, 10000, 2, 2)',  // 卡余额
        'transactionRecords|1-5': [{  // 消费记录
            'transactionDate|1': ["2024-02-18","2024-04-08","2024-10-03","2024-10-15"],  // 消费日期
            'transactionAmount': '@float(10, 500, 2, 2)',  // 消费金额
            'transactionType|1': ["充电扣款", "服务费扣款", "停车费扣款", "其他"]  // 消费类型
        }],
        'validUntil': '@date("yyyy-MM-dd")'  // 有效期至
    }],
    total:53
    })
  }
});


//招商管理分类列表接口
Mock.mock('https://www.demo.com/document',"get",()=>{
  return {
    code:200,
    message:"操作成功",
    data:{
      type:["招商类","广告类","公告类","提示类","日常类","告警类","其他"],//文章类型
      important:["一级","二级","三级","四级"],//重要程度
      publish:["站内信","公众号","小程序","H5","官网"]//发布渠道
    }
  }
})

// 自定义生成随机账号函数
Mock.Random.extend({
  account: function() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const length = Mock.mock('@natural(6, 10)');
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
})
//权限设置页面
Mock.mock('https://www.demo.com/permissionList','post',(req:any)=>{
  const {pageSize} = JSON.parse(req.body);
  console.log("权限设置接口收到参数",JSON.parse(req.body)) 
return {
    code:200,
    message:"操作成功",
    data:Mock.mock({
      [`list|${pageSize}`]:[{
        'name': '@cname',  // 姓名
        'account': '@account',//账号
        'phone': /^1[3-9]\d{9}$/,  // 电话
        'idNo': '@id',  // 身份证号
        'position|1':["客服专员",'客服经理','市场专员',"市场经理","运营专员","运营经理","技术工程师","技术经理","Boss"],//职位
        'department|1':['总裁办','技术部','市场部','维修部','运营部','客服部'],//所属部门
        "pageAuthority|1":['admin','manager','user','自定义权限'],//页面权限
        'btnAuthority|1':['add','delete','edit','all','自定义权限'],//按钮权限
    }],
    total:41
    })
  }
})


const userMenulist = [
  {
    name: "数据看板",
    url: "/dashboard",
    icon: "DataLine"
  },
  {
    name: "充电站管理",
    url: "/chargingstation",
    icon: "Lightning",
    children: [
      {
        name: "充电站监控",
        url: "/chargingstation/monitor",
        icon: "VideoCamera"
      },

      {
        name: "充电桩管理",
        url: "/chargingstation/fault",
        icon: "Warning"
      }
    ]
  },
  {
    name: "电子地图",
    url: "/map",
    icon: "MapLocation"
  },

  {
    name: "报警管理",
    url: "/alarm",
    icon: "Phone"
  },

  {
    name: "会员卡管理",
    url: "/equipment",
    icon: "Magnet"
  },
  {
    name: "个人中心",
    url: "/personal",
    icon: "User"
  },
]
//获取当前用户权限
Mock.mock("https://www.demo.com/userAuth","post",(req:any)=>{
 //console.log(234,req.body)
 const {pageAuthority}=JSON.parse(req.body)
  console.log("后端收到当前权限",pageAuthority)
  return {
    code:200,
    message:"操作成功",
    data:{
      list:pageAuthority=="user"? userMenulist:(pageAuthority=="manager"?menulist2:menulist),
      btn:pageAuthority=="user"?['add']:(pageAuthority=="manager"?['add',"edit"]:['add',"edit","all","delete"])
    }
  }
})

//权限设置接口
Mock.mock("https://www.demo.com/setAuth","post",(req:any)=>{
  const {btnList,pageList,account}=JSON.parse(req.body)
  console.log("权限设置接口修改账号权限",account,btnList,pageList)
  return{
    code:200,
    message:"操作成功",
    data:null
  }
})