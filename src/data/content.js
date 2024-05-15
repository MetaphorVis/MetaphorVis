import { trackSlotScopes } from "@vue/compiler-core";

export class Content {
    constructor(id, name, title, year, authors, picture, group, application, constructMethod, task, url, publication, innerContent) {
        this.id = id;//唯一标识
        this.name = name;//显示给用户
        this.title = title;
        this.year = year;
        this.authors = authors;//作者
        this.picture = picture;//图片路径
        this.group = group;//筛选组 
        /* 新维度
            1.隐喻类型(Form形式隐喻、交互隐喻)
            
            隐喻喻体种类
            1.实体类型
            2.非实体
            3.动作类型
            4.启发类Inspiration

            3.数据类型(
               1.关系数据Relational（Hierachy层次数据 Graph图网络数据） 
               2.结构化数据Structured（MetaData多维数据 Table表格数据） 
               3.时空数据Spatiotemporal（Spatial地理时空 Time时间序列数据）
               4.非结构化数据Unstructured（Text文本 Vedio图像视频）
               5.场数据Field（Volume体数据 8.Flow流场）
            
            映射类型：
            1."Distance"
            2."Topology"
            3."Attribute"
            4."Hybrid"
            5.Interaction design
            6.Artistic design
            
            application 应用场景：
            1.生物医疗  BiologyMedical(BM)
            2.学术      Academic
            3.科学实验  SciExperiment
            4.电子信息  ElectronicEngineering(EE)
            5.人机交互  HCI
            6.数据分析  DataAnalysis(DA)
            7.社交媒体 SocialMedia 
            8.虚拟现实/增强现实 VR/AR
            9.市场营销 MarketingAnalysis
            10.地理探测  Geography
            11.数字人文  DigitHumanities(DH)

               
        *


        /*三个维度：
            1.隐喻类型(Form形式隐喻、交互隐喻) 
            2.隐喻映射种类((A)Z自然现象 (B)R人造的 (C)F非实体的 (D)D动作 (E)K可视化启发)
            3.数据类型(1.Hierachy层次数据 2.Graph图网络数据 3.MetaData多维数据 4.Table表格数据 5.Spatial地理时空 6.Text文本 
                7.Volume体数据 8.Flow流场 9.Vedio图像视频 10.Event事件 11.Time时间序列数据 12.DataSet集合数据 13.Recombine复合数据)

            再来个具体形式/形状：95种，目前不参与筛选
            4.shape
        */
        this.application = application; //应用场景
        this.constructMethod = constructMethod; //构建隐喻的方法 
        this.task = task; //任务/功能
        this.url = url;
        this.publication = publication;
        this.innerContent = innerContent;//详细描述(比如摘要，功能、特点)
    }
}
        /*
    
*/

/*
    application 应用场景 对照表1~13：
        1.生物医疗  BiologyMedical(BM)
        2.学术      Academic
        3.金融      Financial
        4.地理探测  Geography
        5.数字人文  DigitHumanities(DH)
        6.科学实验  SciExperiment
        7.网络安全  NetworkSecurity(NS)
        8.人机交互  HCI
        9.数据分析  DataAnalysis(DA)
        10.社交媒体 SocialMedia
        11.通信/数字信号  CommunicationEngineer  
        12.软件工程 SE
        13.操作系统 OS
        14.增强现实 AR
        15.工业制造 IndustryManufacture(IM)
        16.家庭娱乐 FamliyEntertain(FE)
*/


