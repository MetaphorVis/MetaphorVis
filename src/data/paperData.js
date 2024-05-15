import { Content } from "./content";

export let paper = [
    new Content
        (
            '2019RMap-SocialMedia-1',//id
            'R-Map(2019)',//name
            //'title'
            'R-Map: A Map Metaphor for Visualizing Information Reposting Process in Social Media',
            '2019',//year
            //authors
            'Shuai Chen, Sihang Li, Siming Chen, and Xiaoru Yuan',
            //pictureUPath
            '../picture100/2019RMap-SocialMedia.png',
            //group:Form/Interaction,Z/R/F/D/K,1~13,shape
            ['Form', 'Entity', ['Relational'], 'Map'],
            //application
            ['SocialMedia'],
            //constructMethod构建隐喻的方法 
            ["Topology", "Attribute", "Hybrid"],
            //task
            ["Present", "Summarize"],
            'https://ieeexplore.ieee.org/abstract/document/8805419',//url
            //publication
            'IEEE Transactions on Visualization and Computer Graphics ( Volume: 26, Issue: 1, Jan. 2020)',
            //innerContent
            {
                Abstract: "We propose R-Map (Reposting Map), a visual analytical approach with a map metaphor to support interactive exploration and analysis of the information reposting process in social media.",
                Func: ["Propogate", "Influence"],
                Feature: ["Dynamic", "Derive"]
            }
        ),
    new Content(
        "2019Flower-Authors-2",//id
        "Influence Flowers(2019)",//name
        //title
        "Influence Flowers of Academic Entities",
        "2019",//year
        //authors
        "Minjeong Shin, Alexander Soen, Benjamin T. Readshaw, Stephen M. Blackburn, Mitchell Whitelaw, Lexing Xie*",
        //picturePath
        "../picture100/2019Flower-Authors.png",
        //group:Form/Interaction,Z/R/F/D/K,1~13,shape
        ['Form', 'Entity', ['Relational'], 'Flower'],
        //application
        ['academic'],
        //constructMethod构建隐喻的方法 
        ["Attribute", "Tolpology", "Hybrid"],
        //task
        ["Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/8986934",//url
        //publication
        "2019 IEEE Conference on Visual Analytics Science and Technology (VAST)",
        //innerContent
        {
            Abstract: "",
            Func: [""],
            Feature: [""]
        }
    ),
    new Content(
        "2019VirtualDesk-Interaction-3",//id
        "VirtualDesk(2019)",//name
        //title
        "Comfortable Immersive Analytics With the VirtualDesk Metaphor",
        "2019",//year
        //authors
        "Jorge A. Wagner Filho, Carla M. D. S. Freitas,and Luciana Nedel",
        //picturePath
        "../picture100/2019VirtualDesk-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction", "Entity", ["Spatiotemporal"],"Desktop"],
        //application应用场景
        ["HCI","SciExpriment"],
        //constructMethod构建隐喻的方法 
        ["Interaction Design"],
        //task任务/功能
        ["Expolre"],
        "https://ieeexplore.ieee.org/document/8640072",//url
        //publication
        "IEEE Computer Graphics and Applications ( Volume: 39, Issue: 3, May-June 1 2019)",
        //innerContent
        "",
    ),
    new Content(
        "2019-Pointer-Interaction-4",//id
        "Pointer(2019)",//name
        //title
        "There Is No Spoon: Evaluating Performance, Space Use, and Presence with Expert Domain Users in Immersive Analytics",
        "2019",//year
        //authors
        "Andrea Batch, Andrew Cunningham, Maxime Cordeil, Niklas Elmqvist, Tim Dwyer, Bruce H. Thomas, Kim Marriott",
        //picturePath
        "../picture100/2019-Pointer-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Inspiration",["Spatiotemporal"],"Pointer"],
        //application 应用场景
        ["HCI","VR/AR"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Artistic design"],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/8820171",//url
        //publication
        " IEEE Transactions on Visualization and Computer Graphics ( Volume: 26, Issue: 1, Jan. 2020)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2019SpaceTimeCube-Interaction-5",//id
        "Space-Time Cube(2019)",//name
        //title
        "Evaluating an Immersive Space-Time Cube Geovisualization for Intuitive Trajectory Data Exploration",
        "2019",//year
        //authors
        "Jorge A. Wagner Filho, Student Member, IEEE, Wolfgang Stuerzlinger, Member, IEEE, and Luciana Nedel",
        //picturePath
        "../picture100/2019SpaceTimeCube-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction", "Non-Entity", ["Spatiotemporal"],"Cube"],
        //application应用场景
        ["Geography"],
        //constructMethod构建隐喻的方法 
        ["Distance","Topology", "Attribute", "Hybrid"],
        //task任务/功能
        ["Expolre"],
        "https://ieeexplore.ieee.org/document/8854316",//url
        //publication
        " IEEE Transactions on Visualization and Computer Graphics ( Volume: 26, Issue: 1, Jan. 2020)",
        //innerContent
        {
            Abstract: "",
            Func: [""],
            Feature: [""]
        }
    ),

    new Content(
        "2018Bacterium-Co-occruence-6",//id
        "Bacterium(2018)",//name
        //title
        "An Organic Visual Metaphor for Public Understanding of Conditional Co-occurrences",
        "2018",//year
        //authors
        "Keshav Dasu*,Takanori Fujiwara†,Kwan-Liu Ma‡",
        //picturePath
        "../picture100/2018Bacterium-Co-occruence.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form", "Entity", ["Relational"],"Bacterium"],
        //application应用场景
        ["BioloMedical","DigitHumanities"],
        //constructMethod构建隐喻的方法 
        ["Attribute","Topology","Hybrid"],
        //task任务/功能
        ["Expolre","Present"],
        "https://ieeexplore.ieee.org/document/8823624",//url
        //publication
        "2018 IEEE Scientific Visualization Conference (SciVis)",
        //innerContent
        {
            Abstract: "",
            Func: [""],
            Feature: [""]
        }
    ),
    new Content(
        "2018Flower-Co-occruence-7",//id
        "Flower(2018)",//name
        //title
        "An Organic Visual Metaphor for Public Understanding of Conditional Co-occurrences",
        "2018",//year
        //authors
        "Keshav Dasu*,Takanori Fujiwara†,Kwan-Liu Ma‡",
        //picturePath
        "../picture100/2018Flower-Co-occruence.png",
        //group:Form / Intercaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form", "Entity", ["Relational"],"Flower"],
        //application应用场景
        ["BioloMedical"],
        //constructMethod构建隐喻的方法 
        ["Attribute","Topology","Hybrid"],
        //task任务/功能
        ["Expolre","Present"],
        "https://ieeexplore.ieee.org/document/8823624",//url
        //publication
        "2018 IEEE Scientific Visualization Conference (SciVis)",
        //innerContent
        {
            Abstract: "",
            Func: [""],
            Feature: [""]
        }
    ),
    new Content(
        "2018Lightening-Co-occruence-8",//id
        "Lightening(2018)",//name
        //title
        "An Organic Visual Metaphor for Public Understanding of Conditional Co-occurrences",
        "2018",//year
        //authors
        "Keshav Dasu*,Takanori Fujiwara†,Kwan-Liu Ma‡",
        //picturePath
        "../picture100/2018Lightening-Co-occruence.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form", "Entity", ["Relational"],"Lightening"],
        //application应用场景
        ["BioloMedical"],
        //constructMethod构建隐喻的方法 
        ["Attribute","Topology","Hybrid"],
        //task任务/功能
        ["Explore","Present"],
        "https://ieeexplore.ieee.org/document/8823624",//url
        //publication
        "2018 IEEE Scientific Visualization Conference (SciVis)",
        //innerContent
        {
            Abstract: "",
            Func: [""],
            Feature: [""]
        }
    ),
    new Content(
        "2018-Brush-Interaction-9",//id
        "Brush(2019)",//name
        //title
        "FiberClay: Sculpting Three Dimensional Trajectories to Reveal Structural Insights",
        "2019",//year
        //authors
        "Christophe Hurter, Nathalie Henry Riche, Steven M. Drucker, Maxime Cordeil, Richard Alligier, Romain Vuillemot",
        //picturePath
        "../picture100/2018-Brush-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction", "Action", ["Spatiotemporal"],"sculpture"],
        //application 应用场景
        ["BioloMedical","Geography"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction Design"],
        //task 任务/功能
        ["Present"],
        "https://ieeexplore.ieee.org/abstract/document/8440808/",//url
        //publication
        " IEEE Transactions on Visualization and Computer Graphics ( Volume: 25, Issue: 1, Jan. 2019)",
        //innerContent
        {
            Abstract: "",
            Func: [""],
            Feature: [""]
        }
    ),
    new Content(
        "2017-EMap-SocialMedia-10",//id
        "EMap(2017)",//name
        //title
        "E-Map: A Visual Analytics Approach for Exploring Signifificant Event Evolutions in Social Media",
        "2017",//year
        //authors
        "Siming Chen,Shuai Chen,Lijing Lin,Xiaoru Yuan*,Jie Liang†,Xiaolong Zhang‡",
        //picturePath
        "../picture100/2017-EMap-SocialMedia.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Relational"],"Map"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Locate"],
        "https://ieeexplore.ieee.org/abstract/document/8585638",//url
        //publication
        "2017 IEEE Conference on Visual Analytics Science and Technology (VAST)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2016-Wheel-Brand-11",//id
        "Wheel(2016)",//name
        //title
        "SocialBrands: Visual Analysis of Public Perceptions of Brands on Social Media",
        "2016",//year
        //authors
        "Xiaotong Liu∗,Anbang Xu†,Liang Gou‡,Haibin Liu§,Rama Akkiraju¶,Han-Wei Shen",
        //picturePath
        "../picture100/2016-Wheel-Brand.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Structured"],"Wheel"],
        //application 应用场景
        ["MarketingAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute","Topology","Hybrid"],
        //task 任务/功能
        ["Present"],
        "https://ieeexplore.ieee.org/abstract/document/7883513",//url
        //publication
        "2016 IEEE Conference on Visual Analytics Science and Technology (VAST)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2016-Flow-Ideas-12",//id
        "Flow(2016)",//name
        //title
        "How Ideas Flow across Multiple Social Groups",
        "2016",//year
        //authors
        "Xiting Wang∗ Shixia Liu∗ Yang Chen∗ Tai-Quan Peng† Jing Su‡ Jing Yang§ Baining Guo¶",
        //picturePath
        "../picture100/2016-Flow-Ideas.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Spatiotemporal","Relational"],"Flow"],
        //application 应用场景
        ["DigitalHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Locate"],
        "https://ieeexplore.ieee.org/abstract/document/7883511",//url
        //publication
        "2016 IEEE Conference on Visual Analytics Science and Technology (VAST)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2015-Flow-CiteText-13",//id
        "Flow(2015)",//name
        //title
        "CiteRivers: Visual Analytics of Citation Patterns",
        "2015",//year
        //authors
        "Florian Heimerl, Qi Han, Steffen Koch Member, IEEE, Thomas Ertl Member, IEEE",
        //picturePath
        "../picture100/2015-Flow-CiteText.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Structured","Spatiotemporal"],"Flow"],
        //application 应用场景
        ["Academic"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance","Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Locate"],
        "https://ieeexplore.ieee.org/abstract/document/7192685",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 22, Issue: 1, Jan. 31 2016)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2014-Band-Emotion-14",//id
        "Band(2014)",//name
        //title
        "PEARL: An Interactive Visual Analytic Tool for Understanding Personal Emotion Style Derived from Social Media",
        "2014",//year
        //authors
        "Jian Zhao, Liang Gou, Fei Wang, and Michelle Zhou",
        //picturePath
        "../picture100/2014-Band-Emotion.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Spatiotemporal","Structured"],"Band"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Locate","Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/7042496",//url
        //publication
        "2014 IEEE Conference on Visual Analytics Science and Technology (VAST)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2014-Bubble-Emotion-15",//id
        "Bubble(2014)",//name
        //title
        "PEARL: An Interactive Visual Analytic Tool for Understanding Personal Emotion Style Derived from Social Media",
        "2014",//year
        //authors
        "Jian Zhao, Liang Gou, Fei Wang, and Michelle Zhou",
        //picturePath
        "../picture100/2014-Bubble-Emotion.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Media"],"Bubble"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Summarize"],
        "",//url
        //publication
        "",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-Sedimentation-TimeSeries-16",//id
        "Sedimentation(2013)",//name
        //title
        "Visual Sedimentation",
        "2013",//year
        //authors
        "Samuel Huron, Romain Vuillemot, and Jean-Daniel Fekete, Senior Member, IEEE",
        //picturePath
        "../picture100/2013-Sedimentation-TimeSeries.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Action",["Unstructured","Spatiotemporal"],"Sedimentation"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Locate"],
        "https://ieeexplore.ieee.org/abstract/document/6634152",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 19, Issue: 12, Dec. 2013)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-Kite-Interaction-17",//id
        "Kite(2013)",//name
        //title
        "Visualizing Large-Scale Atomistic Simulations in Ultra-Resolution Immersive Environments",
        "",//year
        //authors
        "Khairi Reda∗, Aaron Knoll, Ken-ichi Nomura, Michael E. Papka, Andrew E. Johnson, Jason Leigh",
        //picturePath
        "../picture100/2013-Kite-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Physical"],"Kite"],
        //application 应用场景
        ["Physical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Enjoy"],
        "https://www.computer.org/csdl/proceedings-article/ldav/2013/06675159/12OmNzFv4dw",//url
        //publication
        "2013 IEEE Symposium on Large-Scale Data Analysis and Visualization (LDAV)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-StickyNote-Interaction-18",//id
        "StickyNote(2013)",//name
        //title
        "The Impact of Physical Navigation on Spatial Organization for Sensemaking",
        "2013",//year
        //authors
        "Christopher Andrews and Chris North",
        //picturePath
        "../picture100/2013-StickyNote-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Text"],"StickyNote"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid\Interaction Design\Artistic design
        ["Artistic design"],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/6634176",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 19, Issue: 12, Dec. 2013)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-MusicScore-CNVData-19",//id
        "MusicScore(2013)",//name
        //title
        "Leveraging Wall-sized High-Resolution Displays for Comparative Genomics Analyses of Copy Number Variation",
        "2013",//year
        //authors
        "Roy A. Ruddle, Waleed Fateen, Darren Treanor Peter Sondergeld, Phil Quirke",
        //picturePath
        "../picture100/2013-MusicScore-CNVData.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Structured"],"MusicScore"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Identify"],
        "https://ieeexplore.ieee.org/abstract/document/6664351",//url
        //publication
        "2013 IEEE Symposium on Biological Data Visualization (BioVis)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-Shutter-Interaction-20",//id
        "Shutter(2013)",//name
        //title
        "MoClo Planner:Interactive Visualization for Modular Cloning Bio-Design",
        "2013",//year
        //authors
        "Orit Shaer, Consuelo Valdes, Sirui Liu, Kara Lu, Traci L. Haddock, Swapnil Bhatia, Douglas Densmore, Robert Kincaid",
        //picturePath
        "../picture100/2013-Shutter-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Relational"],"Shutter"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/6664347",//url
        //publication
        "2013 IEEE Symposium on Biological Data Visualization (BioVis)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-Bubble-DataExplore-21",//id
        "Bubble(2013)",//name
        //title
        "HumMod Browser: An Exploratory Visualization Tool for the Analysis of Whole-Body Physiology Simulation Data",
        "2013",//year
        //authors
        "Keqin Wu Jian Chen* William A. Pruett Robert L. Hester",
        //picturePath
        "../picture100/2013-Bubble-DataExplore.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Physical","Relational"],"Bubble"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Explore"],
        "https://ieeexplore.ieee.org/abstract/document/6664352",//url
        //publication
        "2013 IEEE Symposium on Biological Data Visualization (BioVis)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-Lines-TimeSeries-22",//id
        "Lines(2013)",//name
        //title
        "HumMod Browser: An Exploratory Visualization Tool for the Analysis of Whole-Body Physiology Simulation Data",
        "2013",//year
        //authors
        "Keqin Wu Jian Chen* William A. Pruett Robert L. Hester",
        //picturePath
        "../picture100/2013-Lines-TimeSeries.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Spatiotemporal"],"Line"],
        //application 应用场景
        ["BiologyMedical","ComputerScience"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Explore"],
        "https://ieeexplore.ieee.org/abstract/document/6664352",//url
        //publication
        "2013 IEEE Symposium on Biological Data Visualization (BioVis)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-Lines-EntitiesbyTimes-23",//id
        "Lines(2013)",//name
        //title
        "StoryFlow: Tracking the Evolution of Stories",
        "2013",//year
        //authors
        "Shixia Liu, Senior Member, IEEE, Yingcai Wu, Member, IEEE, Enxun Wei, Mengchen Liu, and Yang Liu",
        //picturePath
        "../picture100/2013-Lines-EntitiesbyTimes.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Structured"],"Lines"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute","Distance","Hybrid"],
        //task 任务/功能
        ["Locate","Explore","Present"],
        "https://ieeexplore.ieee.org/abstract/document/6634164",//url
        //publication
        " IEEE Transactions on Visualization and Computer Graphics ( Volume: 19, Issue: 12, Dec. 2013)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-Clock-TimeSeries-24",//id
        "Clock(2013)",//name
        //title
        "Evaluation of Filesystem Provenance Visualization Tools",
        "2014",//year
        //authors
        "Michelle A. Borkin, Student Member, IEEE, Chelsea S. Yeh, Madelaine Boyd, Peter Macko,",
        //picturePath
        "../picture100/2013-Clock-TimeSeries.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Spatiotemporal"],"Clock"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Distance","Hybrid"],
        //task 任务/功能
        ["Explore"],
        "https://ieeexplore.ieee.org/abstract/document/6634189",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 19, Issue: 12, Dec. 2013)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-TimeLine-SocialMedia-25",//id
        "Flow(2013)",//name
        //title
        "Visual Analysis of Topic Competition on Social Media ",
        "2013",//year
        //authors
        "Panpan Xu, Yingcai Wu, Enxun Wei, Tai-Quan Peng,Shixia Liu,Jonathan J. H. Zhu, and Huamin Qu",
        //picturePath
        "../picture100/2013-TimeLine-SocialMedia.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Media","Relational","Spatiotemporal"],"Flow"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Compare"],
        "https://ieeexplore.ieee.org/abstract/document/6634134",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 19, Issue: 12, Dec. 2013)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-DirectManipulation-Interaction-26",//id
        "DirectManipulation(2013)",//name
        //title
        "Interactive Exploration of Implicit and Explicit Relations in Faceted Datasets",
        "2013",//year
        //authors
        "Jian Zhao, Christopher Collins, Fanny Chevalier, and Ravin Balakrishnan",
        //picturePath
        "../picture100/2013-DirectManipulation-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Action",["Structured"],"DirectManipulation"],
        //application 应用场景
        ["Academic","HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/6634163",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 19, Issue: 12, Dec. 2013)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-Map-SocialMedia-27",//id
        "Map(2013)",//name
        //title
        "ScatterBlogs2: Real-Time Monitoring of Microblog Messages Through User-Guided Filtering",
        "2013",//year
        //authors
        "Harald Bosch, Dennis Thom, Florian Heimerl, Edwin P¨uttmann, Steffen Koch, Robert Kr¨uger, Michael W¨orner, and Thomas Ertl",
        //picturePath
        "../picture100/2013-Map-SocialMedia.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",[,"Structured","Relational"],"Map"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance","Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Present"],
        "https://ieeexplore.ieee.org/abstract/document/6634195",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 19, Issue: 12, Dec. 2013)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Glyps-Biology-28",//id
        "Glyps(2012)",//name
        //title
        "Taxonomy-Based Glyph Design—with a Case Study on Visualizing Workflows of Biological Experiments",
        "",//year
        //authors
        "Eamonn Maguire, Philippe Rocca-Serra, Susanna-Assunta Sansone, Jim Davies, and Min Chen",
        //picturePath
        "../picture100/2012-Glyps-Biology.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Insperation",["Structured"],"Glyps"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute","Topology","Hybrid"],
        //task 任务/功能
        ["Derive","Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/6327266",//url
        //publication
        " IEEE Transactions on Visualization and Computer Graphics ( Volume: 18, Issue: 12, Dec. 2012)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-SunFlower-SocialMedia-29",//id
        "Flower(2012)",//name
        //title
        "Whisper: Tracing the Spatiotemporal Process of Information Diffusion in Real Time",
        "2012",//year
        //authors
        "Nan Cao, Yu-Ru Lin, Xiaohua Sun, David Lazer, Shixia Liu, and Huamin Qu",
        //picturePath
        "../picture100/2012-SunFlower-SocialMedia.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Relational","Spatiotemporal"],"Flower"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance","Topology","Hybrid"],
        //task 任务/功能
        ["Locate"],
        "https://ieeexplore.ieee.org/abstract/document/6327271",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 18, Issue: 12, Dec. 2012)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Flow-Analysis-30",//id
        "Flow(2012)",//name
        //title
        "Visualizing Flow of Uncertainty through Analytical Processes",
        "2012",//year
        //authors
        "Yingcai Wu, Member, IEEE, Guo-Xun Yuan, and Kwan-Liu Ma, Fellow, IEEE",
        //picturePath
        "../picture100/2012-Flow-Analysis.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Structured"],"Flow"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Locate"],
        "https://ieeexplore.ieee.org/abstract/document/6327258",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 18, Issue: 12, Dec. 2012)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Arrows-PositionAndDirection-31",//id
        "Arrows(2012)",//name
        //title
        "Visualization of Electrostatic Dipoles in Molecular Dynamics of Metal Oxides",
        "2012",//year
        //authors
        "Sebastian Grottel, Philipp Beck, Christoph M¨uller, Guido Reina, Johannes Roth, Hans-Rainer Trebin, and Thomas Ertl",
        //picturePath
        "../picture100/2012-Arrows-PositionAndDirection.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Insperation",["Field"],"Arrow"],
        //application 应用场景
        ["SciExperiment"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance"],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/6327210",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 18, Issue: 12, Dec. 2012)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Spatial-Interaction-32",//id
        "Spatial(2012)",//name
        //title
        "Understanding Pen and Touch Interaction for Data Exploration on Interactive Whiteboards",
        "2012",//year
        //authors
        "Jagoda Walny, Bongshin Lee, Paul Johns, Nathalie Henry Riche, and Sheelagh Carpendale",
        //picturePath
        "../picture100/2012-Spatial-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Action","","Touch"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/6327284",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 18, Issue: 12, Dec. 2012)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Slot-Tile-Drag-Interaction-33",//id
        "Tree(2012)",//name
        //title
        "The DeepTree Exhibit: Visualizing the Tree of Life to Facilitate Informal Learning",
        "2012",//year
        //authors
        "Florian Block, Michael S. Horn, Brenda Caldwell Phillips,Judy Diamond, E. Margaret Evans,and Chia Shen",
        //picturePath
        "../picture100/2012-Slot-Tile-Drag-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Relational"],"Tree"],
        //application 应用场景
        ["HCI","BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/6327285",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 18, Issue: 12, Dec. 2012)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-DashBoard-VideoSpeed-34",//id
        "DashBoard(2012)",//name
        //title
        "Evaluation of Fast-Forward Video Visualization",
        "2012",//year
        //authors
        "Markus H¨oferlin, Kuno Kurzhals, Benjamin H¨oferlin, Gunther Heidemann, and Daniel Weiskopf",
        //picturePath
        "../picture100/2012-DashBoard-VideoSpeed.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Unstructured"],"DashBoard"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/6327214",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 18, Issue: 12, Dec. 2012)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Flow-Text-35",//id
        "Flow(2012)",//name
        //title
        "LeadLine: Interactive Visual Analysis of Text Data through Event Identifification and Exploration",
        "2012",//year
        //authors
        "Wenwen Dou, Xiaoyu Wang, Drew Skau, William Ribarsky, and Michelle X. Zhou",
        //picturePath
        "../picture100/2012-Flow-Text.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Relational","Spatiotemporal"],"Flow"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Locate"],
        "https://ieeexplore.ieee.org/abstract/document/6400485",//url
        //publication
        "2012 IEEE Conference on Visual Analytics Science and Technology (VAST)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2005-Painting-MachineLearning-36",//id
        "Painting(2005)",//name
        //title
        "An Intelligent System Approach to HigherDimensional Classification of Volume Data",
        "2005",//year
        //authors
        "Fan-Yin Tzeng, Eric B. Lum, Member, IEEE, and Kwan-Liu Ma, Senior Member, IEEE",
        //picturePath
        "../picture100/2005-Painting-MachineLearning.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Action",["Volume"],"Painting"],
        //application 应用场景
        ["BiologyMedical","HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Record"],
        "https://ieeexplore.ieee.org/abstract/document/1407860",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 11, Issue: 3, May-June 2005)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Wheel-MultiData-37",//id
        "Wheel(2012)",//name
        //title
        "Reinventing the Contingency Wheel: Scalable Visual Analytics of Large Categorical Data",
        "2012",//year
        //authors
        "Bilal Alsallakh, Wolfgang Aigner, Silvia Miksch, and M. Eduard Gr¨oller",
        //picturePath
        "../picture100/2012-Wheel-MultiData.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Structured"],"Wheel"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance","Topology","Hybrid"],
        //task 任务/功能
        ["Present"],
        "https://ieeexplore.ieee.org/abstract/document/6327291",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 18, Issue: 12, Dec. 2012)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Lens-Interaction-38",//id
        "Lens(2012)",//name
        //title
        "Living Liquid: Design and Evaluation of an Exploratory Visualization Tool for Museum Visitors",
        "2012",//year
        //authors
        "Joyce Ma, Isaac Liao, Kwan-Liu Ma, Fellow, and Jennifer Frazier",
        //picturePath
        "../picture100/2012-Lens-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Non-entity",["Structured"],"Lens"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Locate"],
        "https://ieeexplore.ieee.org/abstract/document/6327286",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 18, Issue: 12, Dec. 2012)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Filter-Flow-Interaction-39",//id
        "Filtering(2012)",//name
        //title
        "Beyond Mouse and Keyboard: Expanding Design Considerations for Information Visualization Interactions",
        "2012",//year
        //authors
        "Bongshin Lee, Petra Isenberg, Nathalie Henry Riche, and Sheelagh Carpendale",
        //picturePath
        "../picture100/2012-Filtering-Flow-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Spatiotemporal"],"Filtering"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Locate"],
        "https://ieeexplore.ieee.org/abstract/document/6327275",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 18, Issue: 12, Dec. 2012)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Film-Strip-VedioFrame-40",//id
        "Film-Strip(2012)",//name //幻灯片
        //title
        "AlVis: Situation Awareness in the Surveillance of Road Tunnels",
        "2012",//year
        //authors
        "Harald Piringer∗，Matthias Buchetics†，Rudolf Benedik‡",
        //picturePath
        "../picture100/2012-Film-Strip-VedioFrame.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Unstructured"],"Film-Strip"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/6400556",//url
        //publication
        "2012 IEEE Conference on Visual Analytics Science and Technology (VAST)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Paper-on-Table-Interaction-41",//id
        "Paper-on-Table(2012)",//name
        //title
        "Interaction Support for Visual Comparison Inspired by Natural Behavior",
        "2012",//year
        //authors
        "Christian Tominski, Camilla Forsell, and Jimmy Johansson",
        //picturePath
        "../picture100/2012-Paper-on-Table-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",[""],"Paper"],
        //application 应用场景
        ["DataAnalysis","HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Explore","Compare"],
        "https://ieeexplore.ieee.org/abstract/document/6327278",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 18, Issue: 12, Dec. 2012)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2011-Light-Surgery-42",//id
        "Light(2011)",//name
        //title
        "Crepuscular Rays for Tumor Accessibility Planning",
        "2011",//year
        //authors
        "Rostislav Khlebnikov, Bernhard Kainz, Judith Muehl, and Dieter Schmalstieg, Member, IEEE",
        //picturePath
        "../picture100/2011-Light-Surgery.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Volume"],"Light"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/6064981",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 17, Issue: 12, Dec. 2011)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2011-ParallelCoordinate-Text-43",//id
        "ParallelCoordinate(2011)",//name
        //title
        "ParallelTopics: A Probabilistic Approach to Exploring Document Collections",
        "2011",//year
        //authors
        "Wenwen Dou∗, Xiaoyu Wang†,Remco Chang‡,William Ribarsky§",
        //picturePath
        "../picture100/2011-ParallelCoordinate-Text.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Unstructured"],"ParallelCoordinate"],
        //application 应用场景
        ["Academic"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Distance","Hybrid"],
        //task 任务/功能
        ["Explore"],
        "https://ieeexplore.ieee.org/abstract/document/6102461",//url
        //publication
        "2011 IEEE Conference on Visual Analytics Science and Technology (VAST)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2011-Fog-Uncertain-44",//id
        "Fog(2011)",//name
        //title
        "Visualizing Virus Population Variability From Next Generation Sequencing Data",
        "2011",//year
        //authors
        "Michael Correll∗ , Subhadip Ghosh† , David O’Connor‡ , Michael Gleicher§",
        //picturePath
        "../picture100/2011-Fog-Uncertain.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Structured"],"Fog"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Present","Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/6094058",//url
        //publication
        "2011 IEEE Symposium on Biological Data Visualization (BioVis).",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2011-HeatMap-Event-45",//id
        "HeatMap(2011)",//name
        //title
        "Visualizing Virus Population Variability From Next Generation Sequencing Data",
        "2011",//year
        //authors
        "Michael Correll∗ , Subhadip Ghosh† , David O’Connor‡ , Michael Gleicher§",
        //picturePath
        "../picture100/2011-HeatMap-Event.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Structured","Spatiotemporal"],"HeatMap"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Explore"],
        "https://ieeexplore.ieee.org/abstract/document/6094058",//url
        //publication
        "2011 IEEE Symposium on Biological Data Visualization (BioVis).",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2011-Flow-Text-46",//id
        "Flow(2011)",//name
        //title
        "TextFlow: Towards Better Understanding of Evolving Topics in Text",
        "2011",//year
        //authors
        "Weiwei Cui, Shixia Liu, Member, IEEE, Li Tan, Conglei Shi, Yangqiu Song, Zekai J. Gao, Xin Tong, and Huamin Qu",
        //picturePath
        "../picture100/2011-Flow-Text.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Unstructured","Spatiotemporal"],"Flow"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/6065008",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 17, Issue: 12, Dec. 2011)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2011-Slab-probability-47",//id
        "Slab(2011)",//name
        //title
        "Fiber Stippling: An Illustrative Rendering for Probabilistic Diffusion Tractography",
        "2011",//year
        //authors
        "Mathias Goldau∗,Alexander Wiebel†,Nico Stephan Gorbach‡,Corina Melzer§,Mario Hlawitschka¶,Gerik Scheuermannk,Marc Tittgemeyer∗∗",
        //picturePath
        "../picture100/2011-Slab-probability.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Relational","Volume"],"fiber stippling"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Present"],
        "https://ieeexplore.ieee.org/abstract/document/6094044",//url
        //publication
        "2011 IEEE Symposium on Biological Data Visualization (BioVis).",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2011-Seesaw-Comparion-48",//id
        "Seesaw(2011)",//name
        //title
        "Asymmetric Relations in Longitudinal Social Networks",
        "2011",//year
        //authors
        "Ulrik Brandes and Bobo Nick",
        //picturePath
        "../picture100/2011-Seesaw-Comparion.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Relational","Structured"],"Seesaw"],
        //application 应用场景
        ["DigitHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Compare"],
        "https://ieeexplore.ieee.org/abstract/document/6064994",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 17, Issue: 12, Dec. 2011)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2011-TopoMap-MultiData-49",//id
        "TopologyMAP(2011)",//name
        //title
        "Topological Spines: A Structure-Preserving Visual Representation of Scalar Fields",
        "2011",//year
        //authors
        "Carlos D. Correa, Member, Peter Lindstrom,  and Peer-Timo Bremer",
        //picturePath
        "../picture100/2011-TopoMap-MultiData.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Structured"],"TopologyMap"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Discover"],
        "https://ieeexplore.ieee.org/abstract/document/6064947",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 17, Issue: 12, Dec. 2011)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2010-Flow-Text-50",//id
        "Flow(2010)",//name
        //title
        "TIARA: A Visual Exploratory Text Analytic System",
        "2010",//year
        //authors
        "Furu Wei † , Shixia Liu † , Yangqiu Song †, Shimei Pan ‡, Michelle X. Zhou §, Weihong Qian † , Lei Shi † , Li Tan † and Qiang Zhang †",
        //picturePath
        "../picture100/2010-Flow-Text.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Unstructured","Spatiotemporal"],"Flow"],
        //application 应用场景
        ["Academic"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance","Attritube","Hybrid"],
        //task 任务/功能
        ["Summarize"],
        "https://dl.acm.org/doi/abs/10.1145/1835804.1835827",//url
        //publication
        "",/*************************************没找到publication*********************************************/
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2010-Cartoon-QueryOrTemporal-51",//id
        "Cartoon(2010)",//name
        //title
        "Interactive Querying of Temporal Data Using A Comic Strip Metaphor ∗",
        "2010",//year
        //authors
        "Jing Jin, Pedro Szekely†",
        //picturePath
        "../picture100/2010-Cartoon-QueryOrTemporal.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Spatiotemporal","Unstructured"],"Cartoon"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Identify"],
        "https://ieeexplore.ieee.org/abstract/document/5652890",//url
        //publication
        "2010 IEEE Symposium on Visual Analytics Science and Technology",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2010-MapTerrian-Text-52",//id
        "Terrian Map(2010)",//name
        //title
        "Two-stage Framework for a Topology-Based Projection and Visualization of Classifified Document Collections",
        "2010",//year
        //authors
        "Patrick Oesterling,Gerik Scheuermann∗ ,Sven Teresniak ,Gerhard Heyer†,Steffen Koch Thomas Ertl‡,Gunther H. Weber§",
        //picturePath
        "../picture100/2010-MapTerrian-Text.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Structured"],"Terrian Map"],
        //application 应用场景
        ["Academic"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Distance","Hybrid"],
        //task 任务/功能
        ["Present"],
        "https://ieeexplore.ieee.org/abstract/document/5652940",//url
        //publication
        "2010 IEEE Symposium on Visual Analytics Science and Technology",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2010-Flow-MultiText-53",//id
        "Flow(2010)",//name
        //title
        "Understanding Text Corpora with Multiple Facets",
        "2010",//year
        //authors   
        "Lei Shi ,Furu Wei ,Shixia Liu, Li Tan ,Xiaoxiao Lian∗,Michelle X. Zhou†",
        //picturePath
        "../picture100/2010-Flow-MultiText.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Unstructured"],"Flow"],
        //application 应用场景
        ["Academic","DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Present"],
        "https://ieeexplore.ieee.org/abstract/document/5652931",//url
        //publication
        "2010 IEEE Symposium on Visual Analytics Science and Technology",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2010-Triangle-Opinion-54",//id
        "Triangle(2010)",//name
        //title
        "OpinionSeer: Interactive Visualization of Hotel Customer Feedback",
        "2010",//year
        //authors
        "Yingcai Wu, Furu Wei, Shixia Liu, Norman Au, Weiwei Cui, Hong Zhou, and Huamin Qu",
        //picturePath
        "../picture100/2010-Triangle-Opinion.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Unstructured"],"Triangle"],
        //application 应用场景
        ["MarketingAnalysis","SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance"],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/5613449",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 16, Issue: 6, Nov.-Dec. 2010)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2010-ParallelCoordinate-ClusterData-55",//id
        "ParallelCoordinate(2010)",//name
        //title
        "Comparative Analysis of Multidimensional, Quantitative Data",
        "2010",//year
        //authors
        "Alexander Lex, Marc Streit, Christian Partl, Karl Kashofer, and Dieter Schmalstieg",
        //picturePath
        "../picture100/2010-ParallelCoordinate-ClusterData.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Structured"],"ParallelCoordinate"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Compare"],
        "https://ieeexplore.ieee.org/abstract/document/5613440",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 16, Issue: 6, Nov.-Dec. 2010)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2011-Flower-WebData-56",//id
        "Flower(2011)",//name
        //title
        "Visualizing Web Search Results Using Glyphs:Design and Evaluation of a Flower Metaphor",
        "2011",//year
        //authors
        "MICHAEL CHAU",
        //picturePath
        "../picture100/2011-Flower-WebData.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Structured"],"Flower"],
        //application 应用场景
        ["ElectronicEngineering"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Enjoy"],
        "https://dl.acm.org/doi/abs/10.1145/1929916.1929918",//url
        //publication
        "",/****************************************no poblication find************************************************* */
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2007-TopologicalLandscape-ScalarFunction-57",//id
        "Topological Landscape(2007)",//name
        //title
        "Topological Landscapes: A Terrain Metaphor for Scientific Data",
        "2007",//year
        //authors
        "Gunther H. Weber, Peer-Timo Bremer and Valerio Pascucci",
        //picturePath
        "../picture100/2007-TopologicalLandscape-ScalarFunction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Structured"],"Landscape"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Discover","Explore"],
        "https://ieeexplore.ieee.org/abstract/document/4376169",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 13, Issue: 6, Nov.-Dec. 2007)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2007-FlowRiver-Video-58",//id
        "FlowRiver(2007)",//name
        //title
        "NewsLab: Exploratory Broadcast News Video Analysis",
        "2007",//year
        //authors
        "Mohammad Ghoniem∗,Dongning Luo†,Jing Yang‡,William Ribarsky§",
        //picturePath
        "../picture100/2007-FlowRiver-Video.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Unstructured"],"Flow"],
        //application 应用场景
        ["DigitalHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Present"],
        "https://ieeexplore.ieee.org/abstract/document/4389005",//url
        //publication
        "2007 IEEE Symposium on Visual Analytics Science and Technology",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2007-Lens-Interaction-59",//id
        "Lens(2007)",//name
        //title
        "NewsLab: Exploratory Broadcast News Video Analysis",
        "2007",//year
        //authors
        "Mohammad Ghoniem∗,Dongning Luo†,Jing Yang‡,William Ribarsky§",
        //picturePath
        "../picture100/2007-Lens-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Unstructured"],"Lens"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Identify"],
        "https://ieeexplore.ieee.org/abstract/document/4389005",//url
        //publication
        "2007 IEEE Symposium on Visual Analytics Science and Technology",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2006-Map-WebPrefix-60",//id
        "Map(2006)",//name
        //title
        "Topographic Visualization of Prefix Propagation in the Internet",
        "2006",//year
        //authors
        "Pier Francesco Cortese, Giuseppe Di Battista, Antonello Moneta,Maurizio Patrignani, and Maurizio Pizzonia",
        //picturePath
        "../picture100/2006-Map-WebPrefix.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Unstructured"],"Map"],
        //application 应用场景
        ["ElectronicEngineering"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute"],
        //task 任务/功能
        ["Present"],
        "https://ieeexplore.ieee.org/abstract/document/4015423",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 12, Issue: 5, Sept.-Oct. 2006)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2006-GpuTools-Medical-61",//id
        "Surgical tools(2006)",//name
        //title
        "Feature Aligned Volume Manipulation for Illustration and Visualization",
        "2006",//year
        //authors
        "Carlos D. Correa, Deborah Silver and Min Chen",
        //picturePath
        "../picture100/2006-GpuTools-Medical.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Field"],"Surgical tools"],
        //application 应用场景
        ["HCI","BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Identify"],
        "https://ieeexplore.ieee.org/abstract/document/4015466",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 12, Issue: 5, Sept.-Oct. 2006)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2006-SpaceFilling-Interaction-62",//id
        "SpaceFilling(2006)",//name
        //title
        "FacetMap: A Scalable Search and Browse Visualization",
        "2006",//year
        //authors
        "Greg Smith, Mary Czerwinski, Brian Meyers, Daniel Robbins, George Robertson, Desney S. Tan",
        //picturePath
        "../picture100/2006-SpaceFilling-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Structured"],"SpaceFilling"],
        //application 应用场景
        ["DataAnalysis","BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Browse"],
        "https://ieeexplore.ieee.org/abstract/document/4015432",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 12, Issue: 5, Sept.-Oct. 2006)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2006-Lens-Interaction-63",//id
        "Lens(2006)",//name
        //title
        "ClearView:An Interactive Context Preserving Hotspot Visualization Technique",
        "2006",//year
        //authors
        "Jens Kr¨uger, Jens Schneider, R¨udiger Westermann",
        //picturePath
        "../picture100/2006-Lens-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Field"],"Lens"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Identify"],
        "https://ieeexplore.ieee.org/abstract/document/4015450",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 12, Issue: 5, Sept.-Oct. 2006)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2006-SolarSystem-Interaction-64",//id
        "Solar System(2006)",//name
        //title
        "A Novel Visualization Model for Web Search Results",
        "2006",//year
        //authors
        "Tien N. Nguyen, Member, IEEE and Jin Zhang",
        //picturePath
        "../picture100/2006-SolarSystem-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Unstructured"],"SolarSystem"],
        //application 应用场景
        ["HCI","ComputerScience"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance","Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Browse"],
        "https://ieeexplore.ieee.org/abstract/document/4015455",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 12, Issue: 5, Sept.-Oct. 2006)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2006-Splitting-Interaction-65",//id
        "Splitting(2006)",//name
        //title
        "Exploded Views for Volume Data",
        "2006",//year
        //authors
        "Stefan Bruckner and M. Eduard Gr¨oller,Member, IEEE Computer Society",
        //picturePath
        "../picture100/2006-Splitting-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Action",["Field"],"Exploded view"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Browse"],
        "https://ieeexplore.ieee.org/abstract/document/4015467",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 12, Issue: 5, Sept.-Oct. 2006)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2006-MapAndTimeline-Analysis-66",//id
        "Map and Timeline(2006)",//name
        //title
        "Interactive Visual Synthesis of Analytic Knowledge",
        "2006",//year
        //authors
        "David Gotz∗ ,Michelle X. Zhou†, Vikram Aggarwal‡",
        //picturePath
        "../picture100/2006-MapAndTimeline-Analysis.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Unstructured","Spatiotemporal"],"Map","Timeline"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Explore"],
        "https://ieeexplore.ieee.org/abstract/document/4035747",//url
        //publication
        "2006 IEEE Symposium On Visual Analytics Science And Technology",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2005-ParallelSet-Classify-67",//id
        "ParallelSet(2005)",//name
        //title
        "Parallel Sets: Visual Analysis of Categorical Data Visualization",
        "2005",//year
        //authors
        "Carlos D. Correa, Deborah Silver and Min Chen",
        //picturePath
        "../picture100/2005-ParallelSet-Classify.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Structured"],"ParallelSet"],
        //application 应用场景
        ["DataAnalysis","MarketingAnalysis","DigitHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Present"],
        "https://ieeexplore.ieee.org/abstract/document/1532139",//url
        //publication
        "IEEE Symposium on Information Visualization, 2005. INFOVIS 2005.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2005-Piano-Signal-68",//id
        "Piano(2005)",//name
        //title
        "The Visible Radio: Process Visualization of a Software-Defined Radio",
        "2005",//year
        //authors
        "Matthew Hall, Alex Betts, Donna Cox, David Pointer, Volodymyr Kindratenko",
        //picturePath
        "../picture100/2005-Piano-Signal.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Spatiotemporal"],"Piano"],
        //application 应用场景
        ["ElectronicEngineering"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Artistic design"],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/1532791",//url
        //publication
        "VIS 05. IEEE Visualization, 2005.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2005-Camara-Interaction-69",//id
        "Camera(2005)",//name
        //title
        "Visualization in the Einstein Year 2005: A Case Study on Explanatory and Illustrative Visualization of Relativity and Astrophysics",
        "2005",//year
        //authors
        "Daniel Weiskopf∗, Marc Borchers, Thomas Ertl, Martin Falk, Oliver Fechtig, Regine Frank, Frank Grave,Andreas King, Ute Kraus, Thomas M¨uller, Hans-Peter Nollert, Isabel Rica Mendez, Hanns Ruder, Tobias Schafhitzel, Sonja Sch¨ar, Corvin Zahn, Michael Zatloukal",
        //picturePath
        "../picture100/2005-Camara-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Spatiotemporal"],"Camera"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Lookup"],
        "https://ieeexplore.ieee.org/abstract/document/1532845",//url
        //publication
        "VIS 05. IEEE Visualization, 2005.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2005-Lens-Interaction-70",//id
        "Lens(2005)",//name
        //title
        "The Magic Volume Lens: An Interactive Focus+Context Technique for Volume Rendering",
        "2005",//year
        //authors
        "Lujin Wang Ye Zhao Klaus Mueller Arie Kaufman∗",
        //picturePath
        "../picture100/2005-Lens-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Field"],"Lens"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Lookup"],
        "https://ieeexplore.ieee.org/abstract/document/1532818",//url
        //publication
        "VIS 05. IEEE Visualization, 2005.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2005-TabbedPane-Interaction-71",//id
        "TabbedPane(2005)",//name
        //title
        "Visualizing Coordination In Situ",
        "2005",//year
        //authors
        "Chris Weaver∗",
        //picturePath
        "../picture100/2005-TabbedPane-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Non-entity",["Structured"],"TabbedPane"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/1532143",//url
        //publication
        "IEEE Symposium on Information Visualization, 2005. INFOVIS 2005.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2005-X-Ray-Network-72",//id
        "X-Ray(2005)",//name
        //title
        "Vizster: Visualizing Online Social Networks",
        "2005",//year
        //authors
        "Jeffrey Heer,danah boyd",
        //picturePath
        "../picture100/2005-X-Ray-Network.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Inspiration",["Structured"],"X-Ray"],
        //application 应用场景
        ["SocialMedia","HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Enjoy","Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/1532126",//url
        //publication
        "IEEE Symposium on Information Visualization, 2005. INFOVIS 2005.",
        //innerContent
        {
            Abstract:"",
            Func:[""], 
            Feature:[""]
        }
    ),
    new Content(
        "2004-WrappedLine-DNA-73",//id
        "WrappedLine(2004)",//name
        //title
        "PQuad: Visualization of Predicted Peptides and Proteins",
        "2004",//year
        //authors
        "Susan L. Havre, Mudita Singhal, Deborah A. Payne ,Bobbie-Jo M. Webb-Robertson",
        //picturePath
        "../picture100/2004-WrappedLine-DNA.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["form","Non-entity",["Relational","Structured"],"WrappedLine"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/1372232",//url
        //publication
        "IEEE Visualization 2004",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2004-Telescope-Interaction-74",//id
        "Telescope(2004)",//name
        //title
        "Evaluating a System for Interactive Exploration of Large, Hierarchically Structured Document Repositories",
        "2004",//year
        //authors
        "Michael Granitzer+,Wolfgang Kienreich+ ,Vedran Sabol + ,Keith Andrews*,Werner Klieber +",
        //picturePath
        "../picture100/2004-Telescope-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Relational"],"Telescope"],
        //application 应用场景
        ["HCI","DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/1382900",//url
        //publication
        "IEEE Symposium on Information Visualization",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2004-Geography-Event-75",//id
        "SedimentaryRock(2004)",//name
        //title
        "Artifacts of the Presence Era: Using Information Visualization to Create an Evocative Souvenir",
        "2004",//year
        //authors
        "Fernanda B. Viégas*,Ethan Perry*,Ethan Howe*,Judith Donath*",
        //picturePath
        "../picture100/2004-Geography-Event.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Unstructured"],"SedimentaryRock"],
        //application 应用场景
        ["DigitalHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Locate"],
        "https://ieeexplore.ieee.org/abstract/document/1382897",//url
        //publication
        "IEEE Symposium on Information Visualization",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2004-Pionter-Interaction-76",//id
        "Pionter(2004)",//name
        //title
        "Immersive Design of DNA Molecules with a Tangible Interface",
        "2004",//year
        //authors
        "Steven Schkolne,Hiroshi Ishii,Peter Schröder",
        //picturePath
        "../picture100/2004-Pionter-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Field"],"Tweezer"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Lookup"],
        "https://ieeexplore.ieee.org/abstract/document/1372201",//url
        //publication
        "IEEE Visualization 2004",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2003-Book-Anatomy-77",//id
        "Book(2003)",//name
        //title
        "Using Deformations for Browsing Volumetric Data",
        "2003",//year
        //authors
        "Michael J. McGuffin∗ ,Liviu Tancau† ,Ravin Balakrishnan‡",
        //picturePath
        "../picture100/2003-Book-Anatomy.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Field"],"Book","FoldingFan"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Browse"],
        "https://ieeexplore.ieee.org/abstract/document/1250400",//url
        //publication
        "IEEE Visualization, 2003. VIS 2003.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2011-City-SoftWare-78",//id
        "City(2011)",//name
        //title
        "A 3D Metaphor for Software Production Visualization",
        "2003",//year
        //authors
        "Thomas Panas, Rebecca Berrigan, John Grundy",
        //picturePath
        "../picture100/2011-City-SoftWare.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Structured","Spatiotemporal","Structured"],"City"],
        //application 应用场景
        ["ElectronicEngineering"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute"],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/1217996",//url
        //publication
        "Proceedings on Seventh International Conference on Information Visualization, 2003. IV 2003.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2004-Landscape-SoftWare-79",//id
        "Landscape(2004)",//name
        //title
        "Software LandscapesVisualizing the Structure of Large Software Systems",
        "2004",//year
        //authors
        "Michael Balzer, Andreas Noack,Oliver Deussen,Claus Lewerentz",
        //picturePath
        "../picture100/2004-Landscape-SoftWare.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Relational","Structured"],"Landscape"],
        //application 应用场景
        ["ElectronicEngineering"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute","Topology","Hybrid"],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "http://kops.uni-konstanz.de/handle/123456789/6049",//url
        //publication
        "",/************************************no publication find********************************************* */
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2003-SolarSystem-SoftWare-Yang-80",//id
        "SolarSystem(2003)",//name
        //title
        "Software Metrics and Visualisation",
        "2003",//year
        //authors
        "Hong Yul Yang",
        //picturePath
        "../picture100/2003-SolarSystem-SoftWare-Yang.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Relational","Structured"],"SolarSystem"],
        //application 应用场景
        ["ElectronicEngineering"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute","Topology","Hybrid"],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.135.7600&rep=rep1&type=pdf",//url
        //publication
        "",/*************************no publication find********************** */
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2003-CityAndLandscape-SoftWare-Vuduc-81",//id
        "City and Landscape(2003)",//name
        //title
        "Communicating software  architecture using a unifified single-view visualization",
        "2003",//year
        //authors
        "Richard (Rich) Vuduc",
        //picturePath
        "../picture100/2003-CityAndLandscape-SoftWare-Vuduc.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Relational","Structured"],"City"],
        //application 应用场景
        ["ElectronicEngineering"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute","Topology","Hybrid"],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/4276318",//url
        //publication
        "12th IEEE International Conference on Engineering Complex Computer Systems (ICECCS 2007)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2007-City-Software-Alam-82",//id
        "City(2007)",//name
        //title
        "EvoSpaces Visualization Tool: Exploring Software Architecture in 3D",
        "2007",//year
        //authors
        "Sazzadul Alam and Philippe Dugerdil",
        //picturePath
        "../picture100/2007-City-Software-Alam.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Relational","Structured"],"City"],
        //application 应用场景
        ["ElectronicEngineering"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute","Topology","Hybrid"],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/4400173",//url
        //publication
        "14th Working Conference on Reverse Engineering (WCRE 2007)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2008-City-SoftWare-Method-83",//id
        "City(2008)",//name
        //title
        "Visually Localizing Design Problems with Disharmony Maps",
        "2008",//year
        //authors
        "Wettel, Richard and Lanza, Michele",
        //picturePath
        "../picture100/2008-City-SoftWare-Method.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Relational","Structured"],"City"],
        //application 应用场景
        ["ElectronicEngineering"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute","Topology","Hybrid"],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "https://www.si.usi.ch/assets/publications/conf/softvis/softvis2008/WettelL08.pdf",//url
        //publication
        "Proceedings of the 4th ACM Symposium on Software Visualization",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2008-Flow-Software-Code-84",//id
        "Flow(2008)",//name
        //title
        "Code Flows: Visualizing Structural Evolution of Source Code",
        "2008",//year
        //authors
        "Telea, Alexandru and Auber, David",
        //picturePath
        "../picture100/2008-Flow-Software-Code.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Relational"],"Flow"],
        //application 应用场景
        ["ElectronicEngineering"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute"],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-8659.2008.01214.x",//url
        //publication
        "Computer Graphics Forum",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2008-TimeLine-SoftWareCode-85",//id
        "TimeLine(2008)",//name
        //title
        "Visual Exploration of Large-Scale System Evolution",
        "2008",//year
        //authors
        "Richard Wettel and Michele Lanza",
        //picturePath
        "../picture100/2008-TimeLine-SoftWareCode.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Text","Time"],"Flow"],
        //application 应用场景
        ["ElectronicEngineering"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute"],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/4656413",//url
        //publication
        "2008 15th Working Conference on Reverse Engineering",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2008-Flow-SourceCode-86",//id
        "Flow(2008)",//name
        //title
        "Visual Comparison of Hierarchically Organized Data",
        "2008",//year
        //authors
        "Danny Holten and Jarke J. van Wijk",
        //picturePath
        "../picture100/2008-Flow-SourceCode.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Spatiotemporal"],"Flow"],
        //application 应用场景
        ["ElectronicEngineering"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Summarize","Enjoy","Locate"],
        "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-8659.2008.01205.x",//url
        //publication
        "Computer Graphics Forum",//no publication find
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2008-CityMap-SoftWare-87",//id
        "CityMap(2008)",//name
        //title
        "Visual Exploration of Large-Scale System Evolution",
        "2008",//year
        //authors
        "Richard Wettel and Michele Lanza",
        //picturePath
        "../picture100/2008-CityMap-SoftWare.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Relational"],"City"],
        //application 应用场景
        ["ElectronicEngineering"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/4656413",//url
        //publication
        "2008 15th Working Conference on Reverse Engineering",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2008-City-SoftWare-Wettel-88",//id
        "City(2008)",//name
        //title
        "Visually Localizing Design Problems with Disharmony Maps",
        "2008",//year
        //authors
        "Richard Wettel∗ and Michele Lanza†",
        //picturePath
        "../picture100/2008-City-SoftWare-Wettel.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","R",["Relational","Structured"],"City"],
        //application 应用场景
        ["ElectronicEngineering"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "https://www.si.usi.ch/assets/publications/conf/softvis/softvis2008/WettelL08.pdf",//url
        //publication
        "Proceedings of the 4th ACM Symposium on Software Visualization",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2009-Cloud-Word-89",//id
        "Cloud(2009)",//name
        //title
        "Participatory visualization with wordle",
        "2009",//year
        //authors
        "Fernanda B. Viégas, Martin Wattenberg, and Jonathan Feinberg",
        //picturePath
        "../picture100/2009-Cloud-Word.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Unstructured"],"Cloud"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance","Attribute","Hybrid"],
        //task 任务/功能
        ["Enjoy","Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/5290722",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 15, Issue: 6, Nov.-Dec. 2009)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2004-Flow-History-90",//id
        "Flow(2004)",//name
        //title
        "Studying Cooperation and Conflict between Authors with history flow Visualizations",
        "2004",//year
        //authors
        "Fernanda B. Viégas, Martin Wattenberg,Kushal Dave",
        //picturePath
        "../picture100/2004-Flow-History.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Spatiotemporal","Unstructured"],"Flow"],
        //application 应用场景
        ["DigitHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Summarize","Present"],
        "https://flosshub.org/sites/flosshub.org/files/viegaswattenbergdave.pdf",//url
        //publication
        "Proceedings of the SIGCHI conference on Human factors in computing systems",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2003-Pebble-HierarchyData-91",//id
        "Pebble(2003)",//name
        //title
        "pebbles - using Circular Treemaps to visualize disk usage",
        "2003",//year
        //authors
        "Kai Wetzel",
        //picturePath
        "../picture100/2003-Pebble-HierarchyData.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Relational"],"Pebble"],
        //application 应用场景
        ["DataAnalysis","ElectronicEngineering"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Enjoy"],
        "http://lip.sourceforge.net/ctreemap.html.",//url
        //publication
        "",//no publication find
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2014-River-DataStatistic-92",//id
        "River(2014)",//name
        //title
        "State-of-the-Art Report of Visual Analysis for Event Detection in Text Data Streams",
        "2014",//year
        //authors
        "F. Wanner, A. Stoffel, D. Jäckle, B. C. Kwon, A. Weiler, and D. A. Keim",
        //picturePath
        "../picture100/2014-River-dataStatistic.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Unstructured"],"River","Cloud","Tree"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance","Attribute","Topology","Hybrid"],
        //task 任务/功能
        ["Enjoy","Summarize"],
        "http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.691.7800&rep=rep1&type=pdf",//url
        //publication
        "EuroVis (STARs)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2018-ScreenShot-Medical-93",//id
        "ScreenShot(2018)",//name
        //title
        "TapVis: A Data Visualization Approach for Assessment of Alternating Tapping Performance in Patients with Parkinson’s Disease",
        "2018",//year
        //authors
        "I. Jusufi, M. Memedi and D. Nyholm",
        //picturePath
        "../picture100/2018-ScreenShot-Medical.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Inspiration",["Spatiotemporal"],"ScreenShot"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance","Attribute","Hybrid"],
        //task 任务/功能
        ["Enjoy"],
        "https://diglib.eg.org/bitstream/handle/10.2312/eurovisshort20181078/055-059.pdf?sequence=1&isAllowed=n",//url
        //publication
        "Proceedings of the Eurographics/IEEE VGTC Conference on Visualization: Short Papers",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2018-MultiRing-TimeSeries-94",//id
        "MultiRing(2018)",//name
        //title
        "Visualizing Functional Regions by Analysis of Geo-textual Data",
        "2018",//year
        //authors
        "Yunzhe Wang, George Baciu and Chenhui Li",
        //picturePath
        "../picture100/2018-MultiRing-TimeSeries.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Spatiotemporal","Unstructured"],"MlultiRing"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance","Attribute","Hybrid"],
        //task 任务/功能
        ["Enjoy","Summarze"],
        "http://chenhui.li/documents/FunRegions-EuroVis18-Short.pdf",//url
        //publication
        "EuroVis (Short Papers)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2018-Clock-Time-95",//id
        "Clock(2018)",//name
        //title
        "Sketching Temporal Uncertainty - An Exploratory User Study",
        "2018",//year
        //authors
        "Fabian Schwarzinger†, Andreas Roschal, and Theresia Gschwandtner",
        //picturePath
        "../picture100/2018-Clock-Time.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Spatiotemporal"],"Clock"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance"],
        //task 任务/功能
        ["Enjoy","Present"],
        "https://www.cvast.tuwien.ac.at/sites/default/files/schwarzinger_eurovis2018_preprint.pdf",//url
        //publication
        "EuroVis (Short Papers)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2018-UndirectedRootedTree-HierachyData-96",//id
        "Undirected Rooted Tree(2018)",//name
        //title
        "MVN-Reduce: Dimensionality Reduction for the Visual Analysis of Multivariate Networks",
        "2018",//year
        //authors
        "R. M. Martins, J. F. Kruiger, R. Minghim, A. C. Telea, and A. Kerren",
        //picturePath
        "../picture100/2018-UndirectedRootedTree-HierachyData.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Relational"],"Tree"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Enjoy","Summarize"],
        "https://webspace.science.uu.nl/~telea001/uploads/PAPERS/EuroVis17/paper2.pdf",//url
        //publication
        "EuroVis (Short Papers)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2017-NodeLink-Relation-97",//id
        "NodeLink(2017)",//name
        //title
        "MVN-Reduce: Dimensionality Reduction for the Visual Analysis of Multivariate Networks",
        "2017",//year
        //authors
        "R. M. Martins, J. F. Kruiger, R. Minghim, A. C. Telea, and A. Kerren",
        //picturePath
        "../picture100/2017-NodeLink-Relation.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Relational"],"NodeLink"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Discover","Present"],
        "https://webspace.science.uu.nl/~telea001/uploads/PAPERS/EuroVis17/paper2.pdf",//url
        //publication
        "EuroVis (Short Papers)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2015-Piling-TimeSeries-98",//id
        "Piling(2015)",//name
        //title
        "Small MultiPiles: Piling Time to Explore Temporal Patterns in Dynamic Networks",
        "2015",//year
        //authors
        "B. Bach, N. Henry-Riche, T. Dwyer, T. Madhyastha, J-D. Fekete and T. Grabowski",
        //picturePath
        "../picture100/2015-Piling-TimeSeries.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Action",["Structured","Spatiotemporal"],"Piling"],
        //application 应用场景
        ["DigitalHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Distance"],
        //task 任务/功能
        ["Present"],
        "https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.12615",//url
        //publication
        "Computer Graphics Forum. 2015, 34(3): 31-40",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2015-StreamFeather-Vector-99",//id
        "StreamFeather(2015)",//name
        //title
        "Vector Field Visualization of Advective-Diffusive Flows",
        "2015",//year
        //authors
        "H. Hochstetter, M. Wurm and A. Kolb",
        //picturePath
        "../picture100/2015-StreamFeather-Vector.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Field"],"Feather"],
        //application 应用场景
        ["DataAnalysis","Attritube","Hybrid"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance"],
        //task 任务/功能
        ["Discover","Explore"],
        "https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.12660",//url
        //publication
        "Computer Graphics Forum. 2015, 34(3): 481-490.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2015-Temperature-Flood-100",//id
        "Temperature(2015)",//name
        //title
        "Visualization of Object-Centered Vulnerability to Possible Flood Hazards",
        "2015",//year
        //authors
        "D. Cornel,A. Konev,B. Sadransky,Z. Horváth,E. Gröller,J. Waser",
        //picturePath
        "../picture100/2015-Temperature-Flood.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Structured","Spatiotemporal"],"Temperature"],
        //application 应用场景
        ["Geography"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Present","Enjoy"],
        "https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.12645",//url
        //publication
        "Computer Graphics Forum. Vol. 34. No. 3. 2015.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2014-Tangram-VisitMuseum-101",//id
        "Tangram(2014)",//name
        //title
        "Visualizing Proximity-Based Spatiotemporal Behavior of Museum Visitors using Tangram Diagrams",
        "2014",//year
        //authors
        "J. Lanir, P. Bak and T. Kuflik",
        //picturePath
        "../picture100/2014-Tangram-VisitMuseum.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Spatiotemporal"],"Tangram"],
        //application 应用场景
        ["DigitalHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute"],
        //task 任务/功能
        ["Enjoy","Present"],
        "https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.12382",//url
        //publication
        "Computer Graphics Forum. 2014, 33(3): 261-270",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2014-Bar-Fraction-102",//id
        "Bar(2014)",//name
        //title
        "Visual Analysis of Time-Series Similarities for Anomaly Detection in Sensor Networks",
        "2014",//year
        //authors
        "Martin Steiger, Jürgen Bernard, Sebastian Mittelstädt, Hendrik Lücke-Tieke, Daniel Keim, Thorsten May, Jörn Kohlhammer",
        //picturePath
        "../picture100/2014-Bar-Fraction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Structured","Spatiotemporal"],"Bar"],
        //application 应用场景
        ["ElectronicEngineering"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["topology","Attribute"],
        //task 任务/功能
        ["Enjoy","Present"],
        "https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.12396",//url
        //publication
        "Computer graphics forum. Vol. 33. No. 3. 2014",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2014-Map-Recommadation-103",//id
        "Map(2014)",//name
        //title
        "Visualizing Graphs as Maps with Contiguous Regions",
        "2014",//year
        //authors
        "Stephen G. Kobourov, Sergey Pupyrev and Paolo Simonetto",
        //picturePath
        "../picture100/2014-Map-Recommadation.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Relational","Unstructured"],"Map"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute"],
        //task 任务/功能
        ["Derive"],
        "https://www.cs.arizona.edu/sites/default/files/TR14-02.pdf",//url
        //publication
        "EuroVis (Short Papers). 2014",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2014-Clock-SpatioTemporal-104",//id
        "Clock(2014)",//name
        //title
        "Comparing Three Designs of Macro-Glyphs for Poetry Visualization",
        "2014",//year
        //authors
        "Alfie Abdul-Rahman, Eamonn Maguire, and Min Chen",
        //picturePath
        "../picture100/2014-Clock-SpatioTemporal.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Unstructured","Spatiotemporal"],"Clock","Glyph"],
        //application 应用场景
        ["DigitalHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Enjoy","Browse"],
        "https://diglib.eg.org/bitstream/handle/10.2312/eurovisshort.20141165.103-107/103-107.pdf?sequence=1&isAllowed=y",//url
        //publication
        "In Proceedings of EuroVis 2014 ‚Short Paper, 2014",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-Lamp-Variation-105",//id
        "Lamp(2013) NO METAPHOR",//name
        //title
        "A Visual Approach to Investigating Shared and Global Memory Behavior of CUDA Kernels",
        "2013",//year
        //authors
        "Paul Rosen†",
        //picturePath
        "../picture100/2013-Lamp-Variation.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","R",["Spatial"],"Lamp"],
        //application 应用场景
        ["ElectronicEngineering"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Distance"],
        //task 任务/功能
        ["Present","Enjoy"],
        "https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.12103",//url
        //publication
        "Computer Graphics Forum. Vol. 32. No. 3pt2. Oxford, UK: Blackwell Publishing Ltd, 2013",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-Sketching-Geological-106",//id
        "Sketching(2013)",//name
        //title
        "Rapid Sketch-based 3D Modeling of Geology",
        "2013",//year
        //authors
        "E. M. Lidal, D. Patel, M. Bendiksen, T. Langeland, and I. Viola",
        //picturePath
        "../picture100/2013-Sketching-Geological.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Field"],"Painting"],
        //application 应用场景
        ["Geography"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute"],
        //task 任务/功能
        ["Enjoy","Present"],
        "http://www.ii.uib.no/vis_old/publications/pdfs/Lidal13Rapid.pdf",//url
        //publication
        "EnvirVis@ EuroVis. 2013",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Glyph-Sports-107",//id
        "Glyph(2012)",//name
        //title
        "MatchPad: Interactive Glyph-Based Visualization for Real-Time Sports Performance Analysis",
        "2012",//year
        //authors
        "P. A. Legg, D. H. S. Chung M. L. Parry, M. W. Jones, R. Long, I. W. Griffifiths and M. Chen",
        //picturePath
        "../picture100/2012-Glyph-Sports.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Inspiration",["Unstructured"],"Glyph"],
        //application 应用场景
        ["DigitalHumanities","DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute"],
        //task 任务/功能
        ["Enjoy"],
        "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-8659.2012.03118.x",//url
        //publication
        "Computer graphics forum.Vol.31.No.3pt4. Oxford, UK: Blackwell Publishing Ltd, 2012",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Clock-TimeSeries-108",//id
        "Clock(2012)",//name
        //title
        "ClockMap: Enhancing Circular Treemaps with Temporal Glyphs for Time-Series Data",
        "2012",//year
        //authors
        "Fabian Fischer, Johannes Fuchs and Florian Mansmann",
        //picturePath
        "../picture100/2012-Clock-TimeSeries.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Spatiotemporal","Relational"],"Clock"],
        //application 应用场景
        ["ElectronicEngineering"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute"],
        //task 任务/功能
        ["Enjoy","Present"],
        "https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.687.1632&rep=rep1&type=pdf",//url
        //publication
        "EuroVis (Short Papers). 2012",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-RubbleBand-Path-109",//id
        "RubbleBand(2012)",//name
        //title
        "Travel-Route-Centered Metro Map Layout and Annotation",
        "2012",//year
        //authors
        "Hsiang-Yun Wu, Shigeo Takahashi, Chun-Cheng Lin, and Hsu-Chun Yen",
        //picturePath
        "../picture100/2012-RubbleBand-Path.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Relational"],"RubbleBand"],
        //application 应用场景
        ["Geography"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Artistic design"],
        //task 任务/功能
        ["Enjoy"],
        "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-8659.2012.03085.x",//url
        //publication
        "Computer Graphics Forum. Oxford, UK: Blackwell Publishing Ltd, 2012, 31(3pt1): 925-934",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-BrickAndRibbon-Subset-110",//id
        "Brick and ribbon",//name
        //title
        "StratomeX: Visual Analysis of Large-Scale Heterogeneous Genomics Data for Cancer Subtype Characterization",
        "2012",//year
        //authors
        "A. Lex, M. Streit, H.-J. Schulz, C. Partl, D. Schmalstieg, P.J. Park and N. Gehlenborg",
        //picturePath
        "../picture100/2012-BrickAndRibbon-Subset.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Structured"],"Brick"],
        //application 应用场景
        ["BiogolyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute"],
        //task 任务/功能
        ["Present","Enjoy"],
        "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-8659.2012.03110.x",//url
        //publication
        "Computer graphics forum. Vol. 31. No. 3pt3. Oxford, UK: Blackwell Publishing Ltd, 2012",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2008-DyeAdvection-FlowVolumes-111",//id
        "Dye Advection(Flow)(2008)",//name
        //title
        "Particle Level Set Advection for the Interactive Visualization of Unsteady 3D Flow",
        "2008",//year
        //authors
        "Nicolas Cuntz , Andreas Kolb, Robert Strzodka, and Daniel Weiskopf",
        //picturePath
        "../picture100/2008-DyeAdvection-FlowVolumes.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Field"],"Flow"],
        //application 应用场景
        ["SciExperiment"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Present","Enjoy"],
        "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-8659.2008.01200.x",//url
        //publication
        "Computer Graphics Forum. Vol. 27. No. 3. Oxford, UK: Blackwell Publishing Ltd, 2008",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2008-WeatherVane-Direction-112",//id
        "Weather Vane(2008)",//name
        //title
        "Results of a User Study on 2D Hurricane Visualization",
        "2008",//year
        //authors
        "Joel P. Martin, J. Edward Swan II, Robert J. Moorhead II, Zhanping Liu, and Shangshu Cai",
        //picturePath
        "../picture100/2008-WeatherVane-Direction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Inspiration",["Spatiotemporal"],"WeatherVane"],
        //application 应用场景
        ["Geography","DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Enjoy"],
        "https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1467-8659.2008.01234.x",//url
        //publication
        "Computer Graphics Forum. Oxford, UK: Blackwell Publishing Ltd, 2008, 27(3): 991-998",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2021-Flow-FluidAndFlow-113",//id
        "Flow(2021)",//name
        //title
        "SurfRiver: Flattening Stream Surfaces for Comparative Visualization",
        "2021",//year
        //authors
        "Jun Zhang, Jun Tao,Jian-Xun Wang, and Chaoli Wang",
        //picturePath
        "../picture100/2021-Flow-FluidAndFlow.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Field"],"Flow"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute"],
        //task 任务/功能
        ["Enjoy","Present"],
        "https://ieeexplore.ieee.org/abstract/document/9410458",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics, 2021, 27(6): 2783-2795.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2021-Map-Text-114",//id
        "Map(2021)",//name
        //title
        "On the Readability of Abstract Set Visualizations",
        "2021",//year
        //authors
        "Markus Wallinger, Ben Jacobsen, Stephen Kobourov, and Martin N¨ollenburg",
        //picturePath
        "../picture100/2021-Map-Text.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Unstructured"],"Map"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute"],
        //task 任务/功能
        ["Enjoy","Present","Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/9410458",//url
        //publication
        " IEEE Transactions on Visualization and Computer Graphics, 2021, 27(6): 2821-2832.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2020-Tree-MergeHierarchies-115",//id
        "Tree(2020)",//name
        //title
        "PansyTree: Merging Multiple Hierarchies",
        "2020",//year
        //authors
        "Yu Dong, Alex Fauth, Maolin Huang, Yi Chen, Jie Liang",
        //picturePath
        "../picture100/2020-Tree-MergeHierarchies.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Relational"],"Tree","Flower"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute"],
        //task 任务/功能
        ["Enjoy","Explore"],
        "https://ieeexplore.ieee.org/abstract/document/9086199",//url
        //publication
        "2020 IEEE Pacific Visualization Symposium (PacificVis). IEEE, 2020: 131-135",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2020-HandleBar-Interaction-116",//id
        "HandleBar(2020) NO METAPHOR",//name
        //title
        "Immersive WYSIWYG (What You See is What You Get) Volume Visualization",
        "2020",//year
        //authors
        "Song Wang*, Dong Zhu, Hao Yu, Yadong Wu",
        //picturePath
        "../picture100/2020-HandleBar-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Field"],"HandleBar"],
        //application 应用场景
        ["BiologyMedical","HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Summarize","Explore"],
        "https://ieeexplore.ieee.org/abstract/document/9086206",//url
        //publication
        "2020 IEEE Pacific Visualization Symposium (PacificVis). IEEE, 2020: 166-170",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2020-IcicleExtend-Hierachy-117",//id
        "Icicle Extend(2020)",//name
        //title
        "Space-Reclaiming Icicle Plots",
        "2020",//year
        //authors
        "Huub van de Wetering* Nico Klaassen †, Michael Burch ‡",
        //picturePath
        "../picture100/2020-IcicleExtend-Hierachy.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Relational"],"Icicle"],
        //application 应用场景
        ["DataAnalysis","BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/9086292",//url
        //publication
        "2020 IEEE Pacific Visualization Symposium (PacificVis)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2019-TrafficLight-Color-118",//id
        "Traffic Light(2019)",//name
        //title
        "Comparison of Projective Augmented Reality Concepts to Support Medical Needle Insertion",
        "2019",//year
        //authors
        "Florian Heinrich, Fabian Joeres, Kai Lawonn, Christian Hansen",
        //picturePath
        "../picture100/2019-TrafficLight-Color.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Inspiration",["MetaData"],"Color"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/8667734",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 25, Issue: 6, June 1 2019)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2018-ClockAndCalendar-AuditLog-119",//id
        "Clock and Calendar(2018)",//name
        //title
        "LongLine: Visual Analytics System for Large-scale Audit Logs",
        "2018",//year
        //authors
        "Seunghoon Yoo, Jaemin Jo, Bohyoung Kim∗, Jinwook Seo,∗",
        //picturePath
        "../picture100/2018-ClockAndCalendar-AuditLog.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Unstructured","Spatiotemporal"],"Clock"],
        //application 应用场景
        ["ElectronicEngineering","DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Summarize"],
        "https://www.sciencedirect.com/science/article/pii/S2468502X18300159",//url
        //publication
        "Visual Informatics, 2018, 2(1): 82-97.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2018-Wedge-Anomaly-120",//id
        "Wedge(2018)",//name
        //title
        "Visual Analysis of Collective Anomalies Through High-Order Correlation Graph",
        "2018",//year
        //authors
        "Jun Tao,Lei Shi,Zhou Zhuang,Congcong Huang,Rulei Yu,Purui Su,Chaoli Wang,Yang Chen",
        //picturePath
        "../picture100/2018-Wedge-Anomaly.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Spatiotemporal"],"Wedge"],
        //application 应用场景
        ["ElectronicEngineering"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Artistic design"],
        //task 任务/功能
        ["Discover"],
        "https://ieeexplore.ieee.org/abstract/document/8365987",//url
        //publication
        "2018 IEEE Pacific Visualization Symposium (PacificVis)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2018-Radar-Monitor-121",//id
        "Radar(2018)",//name
        //title
        "A Visual Analytics Approach for Equipment Condition Monitoring in Smart Factories of Process Industry",
        "2018",//year
        //authors
        "Wenchao Wu∗,Yixian Zheng†,Kaiyuan Chen‡,Xiangyu Wang§,Nan Cao¶",
        //picturePath
        "../picture100/2018-Radar-Monitor.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Unstructured","Spatiotemporal"],"Radar"],
        //application 应用场景
        ["ElectronicEngineering"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/8365986",//url
        //publication
        "2018 IEEE Pacific Visualization Symposium (PacificVis)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    /***************************************************** 122在下面几个************************************************** */
    new Content(
        "2017-Retractor-DataFeature-123",//id
        "Retractor(2017)",//name
        //title
        "Virtual Retractor: An Interactive Data Exploration System Using Physically Based Deformation",
        "2017",//year
        //authors
        "Cheng Li*,Xin Tong†,Han-Wei Shen‡",
        //picturePath
        "../picture100/2017-Retractor-DataFeature.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Non-entity",["Structured"],"Retractor"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Browse"],
        "https://ieeexplore.ieee.org/abstract/document/8031579",//url
        //publication
        "2017 IEEE Pacific Visualization Symposium (PacificVis)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2017-TrapezoidGlyph-EventFeaure-124",//id
        "Trapezoid(2017)",//name
        //title
        "MobiSeg: Interactive Region Segmentation Using Heterogeneous Mobility Data",
        "2017",//year
        //authors
        "Wenchao Wu, Yixian Zheng∗,Nan Cao†,Haipeng Zeng, Bing Ni, Huamin Qu‡,Lionel M. Ni§",
        //picturePath
        "../picture100/2017-TrapezoidGlyph-EventFeaure.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Structured","Spatiotemporal"],"Trapezoid"],
        //application 应用场景
        ["DigitalHumanities","Geography"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/8031583",//url
        //publication
        "2017 IEEE Pacific Visualization Symposium (PacificVis)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2017-Ring-Density-125",//id
        "Ring(2017)",//name
        //title
        "Range Likelihood Tree: A Compact and Effective Representation for Visual Exploration of Uncertain Data Sets",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2017-Ring-Density.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["DataSet"],"RangeLikelihoodTree"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute"],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/8031589",//url
        //publication
        "2017 IEEE Pacific Visualization Symposium (PacificVis)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2010-Table-MataData-122",//id
        "Table(2010)",//name
        //title
        "MediaTable: Interactive Categorization of Multimedia Collections",
        "",//year
        //authors
        "Ork de Rooij,Marcel Worring,Jarke J. van Wijk",
        //picturePath
        "../picture100/2010-Table-MataData.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Structured"],"Table"],
        //application 应用场景
        ["DigitalHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Compare","Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/5473200",//url
        //publication
        "IEEE Computer Graphics and Applications ( Volume: 30, Issue: 5, Sept.-Oct. 2010)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2015-Lens-Interaction-126",//id
        "Lens(2015)",//name
        //title
        "Interactive Streamline Exploration and Manipulation Using Deformation",
        "2015",//year
        //authors
        "Xin Tong∗,Chun-Ming Chen∗,Han-Wei Shen∗,Pak Chung Wong†",
        //picturePath
        "../picture100/2015-Lens-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Non-entity",["Field"],"Lens"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Enjoy","Lookup"],
        "https://ieeexplore.ieee.org/abstract/document/7156349",//url
        //publication
        "2015 IEEE Pacific Visualization Symposium (PacificVis)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-NodeLink-DynamicGraphs-127",//id
        "NodeLink(2013) NO METAPHOR",//name
        //title
        "Smooth Bundling of Large Streaming and Sequence Graphs",
        "2013",//year
        //authors
        "C. Hurter ∗,O. Ersoy †,A. Telea ‡",
        //picturePath
        "../picture100/2013-NodeLink-DynamicGraphs.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Relational"],"NodeLink"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute"],
        //task 任务/功能
        ["Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/6596126",//url
        //publication
        "2013 IEEE Pacific Visualization Symposium (PacificVis)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-NodelinkHeatmapRadial-Trace-128",//id
        "Nodelink(2013) NO METAPHOR",//name
        //title
        "Visual Task Solution Strategies in Tree Diagrams",
        "2013",//year
        //authors
        "Michael Burch∗, Gennady Andrienko†, Natalia Andrienko†, Markus H¨oferlin∗, Michael Raschke∗,and Daniel Weiskopf∗",
        //picturePath
        "../picture100/2013-NodelinkHeatmapRadial-Trace.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Relational"],"NodeLink"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Summarize","Enjoy"],
        "",//url
        //publication
        "",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-Lens-Interaction-129",//id
        "Lens(2013)",//name
        //title
        "Exploring Entities in Text with Descriptive Non-photorealistic Rendering",
        "2013",//year
        //authors
        "Meng-Wei Chang∗,Christopher Collins†",
        //picturePath
        "../picture100/2013-Lens-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Non-entity",["Text"],"Lens"],
        //application 应用场景
        ["MarketingAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Summarize","Explore"],
        "https://ieeexplore.ieee.org/abstract/document/6596122",//url
        //publication
        "2013 IEEE Pacific Visualization Symposium (PacificVis)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Map-DataSetRelation-130",//id
        "Map(2012)",//name
        //title
        "Embedding, Clustering and Coloring for Dynamic Maps∗",
        "2012",//year
        //authors
        "Yifan Hu†,Stephen G. Kobourov‡,Sankar Veeramoni§",
        //picturePath
        "../picture100/2012-Map-DataSetRelation.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Relational"],"Map"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Distance","Hybrid"],
        //task 任务/功能
        ["Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/6183571",//url
        //publication
        "2012 IEEE Pacific Visualization Symposium",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2020-MetroMap-Set-131",//id
        "MetroMap(2020)",//name
        //title
        "MetroSets: Visualizing Sets as Metro Maps",
        "2020",//year
        //authors
        "Ben Jacobsen, Markus Wallinger, Stephen Kobourov, and Martin N¨ollenburg",
        //picturePath
        "../picture100/2020-MetroMap-Set.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Relational"],"MetroMap"],
        //application 应用场景
        ["DataAnalysis","Academic"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Distance","Hybrid"],
        //task 任务/功能
        ["Sumarize","Enjoy"],
        "https://ieeexplore.ieee.org/abstract/document/9224192",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 27, Issue: 2, Feb. 2021)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2020-FingerMove-Interaction-132",//id
        "Finger Moving(2020)",//name
        //title
        "Nailz: Sensing Hand Input with Touch Sensitive Nails",
        "2020",//year
        //authors
        "DoYoung Lee,SooHwan Lee,Ian Oakley",
        //picturePath
        "../picture100/2020-FingerMove-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Action",[""],"FingerMove"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Lookup","Summarize"],
        "https://dl.acm.org/doi/abs/10.1145/3313831.3376778",//url
        //publication
        "Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems. 2020: 1-13.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2020-Ballon-Process-133",//id
        "Ballon(2020)",//name
        //title
        "Storywell: Designing for Family Fitness App Motivation by Using Social Rewards and Reflection",
        "2020",//year
        //authors
        "Herman Saksono, Carmen Castaneda-Sceppa, Jessica Hoffman,Vivien Morris, Magy Seif El-Nasr, Andrea G. Parker",
        //picturePath
        "../picture100/2020-Ballon-Process.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Spatiotemporal","Relational"],"Ballon"],
        //application 应用场景
        ["DigitalHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Enjoy","Present"],
        "https://dl.acm.org/doi/abs/10.1145/3313831.3376686",//url
        //publication
        "Proceedings of the 2020 CHI conference on human factors in computing systems. 2020: 1-13.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2020-Drawing-Interaction-134",//id
        "Drawing(2020)",//name
        //title
        "Music Creation by Example",
        "2020",//year
        //authors
        "Emma Frid,Celso Gomes,Zeyu Jin",
        //picturePath
        "../picture100/2020-Drawing-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Unstructured"],"Painting"],
        //application 应用场景
        ["HCI","DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Derive"],
        "https://dl.acm.org/doi/abs/10.1145/3313831.3376514",//url
        //publication
        "Proceedings of the 2020 CHI conference on human factors in computing systems. 2020: 1-13.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2020-Caricature-Encode-135",//id
        "Caricature(2020)",//name
        //title
        "Cheat Sheets for Data Visualization Techniques",
        "2020",//year
        //authors
        "Zezhong Wang, Lovisa Sundin, Dave Murray-Rust, Benjamin Bach",
        //picturePath
        "../picture100/2020-Caricature-Encode.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Spatiotemporal"],"Cartoon"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Derive"],
        "https://dl.acm.org/doi/abs/10.1145/3313831.3376271",//url
        //publication
        "Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems. 2020: 1-13.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    /****************************************没有编号********************************************  */
    new Content(
        "2019-Radar-Direction",//id
        "Radar(2019)",//name
        //title
        "An Evaluation of Radar Metaphors for Providing Directional Stimuli Using Non-Verbal Sound",
        "2019",//year
        //authors
        "Brendan Cassidy,Janet C Read,I Scott MacKenzie",
        //picturePath
        "../picture100/2019-Radar-Direction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Spatiotemporal"],"Radar"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Present"],
        "https://dl.acm.org/doi/abs/10.1145/3290605.3300289",//url
        //publication
        "Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems. 2019: 1-8.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2019-Zipper-Path-136",//id
        "Zipper(2019)",//name
        //title
        "PeerLens: Peer-inspired Interactive Learning Path Planning in Online Qestion Pool",
        "2019",//year
        //authors
        "Meng Xia, Mingfei Sun, Huan Wei, Qing Chen, Yong Wang, Lei Shi, Huamin Qu, Xiaojuan Ma",
        //picturePath
        "../picture100/2019-Zipper-Path.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Unstructured"],"Zipper"],
        //application 应用场景
        ["DigitalHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Derive","Present"],
        "https://dl.acm.org/doi/abs/10.1145/3290605.3300864",//url
        //publication
        "Proceedings of the 2019 CHI conference on human factors in computing systems. 2019: 1-12.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2019-CaricatureBook-Interaction-137",//id
        "Caricature Book(2019)",//name
        //title
        "DataToon: Drawing Data Comics About Dynamic Networks with Pen + Touch Interaction",
        "2019",//year
        //authors
        "Nam Wook Kim,Nathalie Henry Riche, Benjamin Bach, Guanpeng Xu, Matthew Brehmer,Ken Hinckley, Michel Pahud, Haijun Xia, Michael J. McGuffin6 Hanspeter Pfister",
        //picturePath
        "../picture100/2019-CaricatureBook-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Relational","Structured","Spatiotemporal"],"CaricatureBook"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        [""],
        //task 任务/功能
        ["Derive"],
        "https://dl.acm.org/doi/abs/10.1145/3290605.3300335",//url
        //publication
        "Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems. 2019: 1-12.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2018-Weather-BloodGlucose-138",//id
        "Weather(2018)",//name
        //title
        "Pictures Worth a Thousand Words: Reflections on Visualizing Personal Blood Glucose Forecasts for Individuals with Type 2 Diabetes",
        "2018",//year
        //authors
        "Pooja M. Desai, Matthew E. Levine, David J. Albers, Lena Mamykina",
        //picturePath
        "../picture100/2018-Weather-BloodGlucose.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Spatiotemporal"],"Weather"],
        //application 应用场景
        ["BiologyMedical"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Enjoy"],
        "https://dl.acm.org/doi/abs/10.1145/3173574.3174112",//url
        //publication
        "Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems. 2018: 1-13.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2018-Grasp-Interaction-140",//id
        "Grasp(2018)",//name
        //title
        "VirtualGrasp: Leveraging Experience of Interacting with Physical Objects to Facilitate Digital Object Retrieval",
        "2018",//year
        //authors
        "Yukang Yan, Chun Yu†, Xiaojuan Ma, Xin Yi, Sun Ke, Yuanchun Shi",
        //picturePath
        "../picture100/2018-Grasp-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Action",["Spatiotemporal"],"Grasp"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Browse"],
        "https://dl.acm.org/doi/abs/10.1145/3173574.3173652",//url
        //publication
        "Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems. 2018: 1-13.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2018-River-Text-141",//id
        "ECG(2018)",//name
        //title
        "T-Cal: Understanding Team Conversation Data with Calendar-based Visualization",
        "2018",//year
        //authors
        "Siwei Fu,Jian Zhao,Hao Fei Cheng,Haiyi Zhu,Jennifer Marlow",
        //picturePath
        "../picture100/2018-River-Text.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Unstructured"],"ECG"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Topology","Attribute"],
        //task 任务/功能
        ["Summarize","Present"],
        "https://dl.acm.org/doi/abs/10.1145/3173574.3174074",//url
        //publication
        "Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems. 2018: 1-13.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2018-Desktop-Interaction-142",//id
        "Desktop(2018)",//name
        //title
        "Designing Coherent Gesture Sets for Multi-scale Navigation on Tabletops",
        "2018",//year
        //authors
        "Vít Rusˇnák, Caroline Appert, Olivier Chapuis, Emmanuel Pietriga",
        //picturePath
        "../picture100/2018-Desktop-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Spatiotemporal"],"Desktop"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Browse"],
        //task 任务/功能
        [""],
        "https://dl.acm.org/doi/abs/10.1145/3173574.3173716",//url
        //publication
        "Proceedings of the 2018 CHI conference on human factors in computing systems.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2018-Canvas-Interaction-143",//id
        "Canvas(2018)",//name
        //title
        "DataInk: Direct and Creative Data-Oriented Drawing",
        "",//year
        //authors
        "Haijun Xia, Nathalie Henry Riche, Fanny Chevalier, Bruno De Araujo, Daniel Wigdor",
        //picturePath
        "../picture100/2018-Canvas-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Relational"],"Canvas"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Lookup","Annotate"],
        "https://dl.acm.org/doi/abs/10.1145/3173574.3173797",//url
        //publication
        "Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2018-Bookshelf-Data-144",//id
        "Bookshelf(2018)",//name
        //title
        "InfoNice: Easy Creation of Information Graphics",
        "",//year
        //authors
        "",
        //picturePath
        "../picture100/2018-Bookshelf-Data.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Structured"],"Bookshelf"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Compare","Browse"],
        "https://dl.acm.org/doi/abs/10.1145/3173574.3173909",//url
        //publication
        "Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2018-Clock-Map-145",//id
        "Map(2018)",//name
        //title
        "HomeFinder Revisited: Finding Ideal Homes with Reachability-Centric Multi-Criteria Decision Making",
        "2018",//year
        //authors
        "Di Weng, Heming Zhu, Jie Bao, Yu Zheng, Yingcai Wu*",
        //picturePath
        "../picture100/2018-Clock-Map.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Spatiotemporal"],"ClockMap"],
        //application 应用场景
        ["Geograhpy","HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Summarize"],
        "https://dl.acm.org/doi/abs/10.1145/3173574.3173821",//url
        //publication
        "Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2018-Sculptor-Interaction-146",//id
        "Sculptor(2018)",//name
        //title
        "Dream Lens: Exploration and Visualization of Large-Scale Generative Design Datasets",
        "2018",//year
        //authors
        "Justin Matejka, Michael Glueck, Erin Bradner, Ali Hashemi, Tovi Grossman, and George Fitzmaurice",
        //picturePath
        "../picture100/2018-Sculptor-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Action",["Spatiotemporal"],"Sculptor"],
        //application 应用场景
        ["DataAnalysis","HCI"],
        //constructMethod 构建隐喻的方法:Attribute Topology Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Annotate"],
        "https://dl.acm.org/doi/abs/10.1145/3173574.3173943",//url
        //publication
        "Proceedings of the 2018 CHI conference on human factors in computing systems",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2016-Vessels-Traffic-147",//id
        "Vessels(2016)",//name
        //title
        "Pulsing Blood Vessels: A Figurative Approach to Traf c Visualization",
        "2016",//year
        //authors
        "Pedro Cruz and Penousal Machado",
        //picturePath
        "../picture100/2016-Vessels-Traffic.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Spatiotemporal"],"Vessels"],
        //application 应用场景
        ["Geography"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Tolopogy","Attribute"],
        //task 任务/功能
        ["Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/7426242",//url
        //publication
        "IEEE Computer Graphics and Applications ( Volume: 36, Issue: 2, Mar.-Apr. 2016)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2015-Bubble-Event-148",//id
        "Bubble(2015)",//name
        //title
        "Wrongfully right: applications of semantic fifigurative metaphors in information visualization",
        "2015",//year
        //authors
        "Pedro Cruz",
        //picturePath
        "../picture100/2015-Bubble-Event.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Spatiotemporal"],"Bubble"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Tolopogy","Attribute"],
        //task 任务/功能
        ["Summarize"],
        "http://visap.uic.edu/2015/VISAP15-Papers/visap2015_Cruz_WrongfullyRight.pdf",//url
        //publication
        " IEEE VIS Arts Program (VISAP), 2015: 14-21.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "1985-Ecosystem-EntitiesRelation-149",//id
        "Ecosystem(1985)",//name
        //title
        "Semiology of Graphics: Diagrams, Networks, Maps.",
        "1985",//year
        //authors
        "Monmonier, Mark",
        //picturePath
        "../picture100/1985-Ecosystem-EntitiesRelation.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Unstructured"],"Ecosystem"],
        //application 应用场景
        ["DigitalHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Summeraize","Present"],
        "https://www.jstor.org/stable/2563117",//url
        //publication
        "(1985): 605-609",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2005-Dust&Manget-MetaData-150",//id
        "Dust&Manget(2005)",//name
        //title
        "Dust & Magnet: multivariate information visualization using a magnet metaphor",
        "2005",//year
        //authors
        "Ji Soo Yi,Rachel Melton,John Stasko,Julie A. Jacko",
        //picturePath
        "../picture100/2005-Dust&Manget-MetaData.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Structured"],"Dust&Manget"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Distance"],
        //task 任务/功能
        ["Summarize","Explore"],
        "https://journals.sagepub.com/doi/abs/10.1057/palgrave.ivs.9500099",//url
        //publication
        "Information visualization, 2005, 4(4): 239-256.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2003-Band-TimeSeries-151",//id
        "Band(2003)",//name
        //title
        "Visualizing Queries on Databases of Temporal Histories: New Metaphors and their Evaluation",
        "2003",//year
        //authors
        "Luca Chittaro and Carlo Combi",
        //picturePath
        "../picture100/2003-Band-TimeSeries.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Time"],"Band"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Enjoy"],
        "https://www.sciencedirect.com/science/article/abs/pii/S0169023X02001374",//url
        //publication
        "Data & Knowledge Engineering 44.2 (2003): 239-264.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2003-Spring-TimeSeries-152",//id
        "Spring(2003)",//name
        //title
        "Visualizing Queries on Databases of Temporal Histories: New Metaphors and their Evaluation",
        "2003",//year
        //authors
        "Luca Chittaro and Carlo Combi",
        //picturePath
        "../picture100/2003-Spring-TimeSeries.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Time"],"Spring"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Enjoy"],
        "https://www.sciencedirect.com/science/article/abs/pii/S0169023X02001374",//url
        //publication
        "Data & Knowledge Engineering 44.2 (2003): 239-264.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2003-PaintStrip-TimeSeries-153",//id
        "PaintStrip(2003)",//name
        //title
        "Visualizing Queries on Databases of Temporal Histories: New Metaphors and their Evaluation",
        "2003",//year
        //authors
        "Luca Chittaro and Carlo Combi",
        //picturePath
        "../picture100/2003-PaintStrip-TimeSeries.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Time"],"PaintStrip"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Enjoy"],
        "https://www.sciencedirect.com/science/article/abs/pii/S0169023X02001374",//url
        //publication
        "Data & Knowledge Engineering 44.2 (2003): 239-264",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2016-MetroMap-Web-154",//id
        "MetroMap(2016)",//name
        //title
        "Egocentric Analysis of Dynamic Networks with EgoLines",
        "2016",//year
        //authors
        "Jian Zhao, Michael Glueck, Fanny Chevalier, Yanhong Wu, Azam Khan",
        //picturePath
        "../picture100/2016-MetroMap-Web.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Relational"],"MetroMap"],
        //application 应用场景
        ["MarketingAnalysis","DigitHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Enjoy","Summarize"],
        "https://dl.acm.org/doi/abs/10.1145/2858036.2858488",//url
        //publication
        "Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems. 2016: 5003-5014.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2012-Lagrangian-Tensor-155",//id
        "Lagrangian(2012)",//name
        //title
        "Beyond Topology: A Lagrangian Metaphor to Visualize the Structure of 3D Tensor Fields",
        "2012",//year
        //authors
        "Xavier Tricoche, Mario Hlawitschka, Samer Barakat, and Christoph Garth",
        //picturePath
        "../picture100/2012-Lagrangian-Tensor.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Action",["Structured"],"Lagrangian"],
        //application 应用场景
        ["SciExperiment"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Distance"],
        //task 任务/功能
        ["Enjoy","Explore"],
        "https://link.springer.com/chapter/10.1007/978-3-642-27343-8_5",//url
        //publication
        "New Developments in the Visualization and Processing of Tensor Fields.Springer, Berlin, Heidelberg, 2012. 93-109",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2005-MetroMap-Event-156",//id
        "MetroMap(2005)",//name
        //title
        "Automatic Layout of Project Plans Using a Metro Map Metaphor",
        "2005",//year
        //authors
        "Jonathan M. Stott,Peter Rodgers,Remo Aslak Burkhard,Michael Meier,Matthias Thomas Jelle Smis",
        //picturePath
        "../picture100/2005-MetroMap-Event.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Structured","Relational"],"MetroMap"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Topology","Attribute"],
        //task 任务/功能
        ["Present"],
        "https://ieeexplore.ieee.org/abstract/document/1509079/",//url
        //publication
        "Ninth International Conference on Information Visualisation (IV'05). IEEE, 2005",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2016-Sedimentation-Topic-157",//id
        "Sedimentation(2016)",//name
        //title
        "ConToVi: Multi-Party Conversation Exploration using Topic-Space Views",
        "2016",//year
        //authors
        "Mennatallah El-Assady, Valentin Gold, Carmela Acevedo, Christopher Collins, and Daniel Keim",
        //picturePath
        "../picture100/2016-Sedimentation-Topic.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Action",["Relational"],"Sedimentation"],
        //applicmation 应用场景
        ["BiologyMedical","ElectronicEngineering"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Summarize"],
        "https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.12919",//url
        //publication
        "Computer Graphics Forum. 2016, 35(3): 431-440",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2006-Desktop-Interaction-158",//id
        "Desktop(2006)",//name
        //title
        "Keepin’ It Real: Pushing the Desktop Metaphor with Physics, Piles and the Pen",
        "2006",//year
        //authors
        "Xavier Tricoche, Mario Hlawitschka, Samer Barakat, and Christoph Garth",
        //picturePath
        "../picture100/2006-Desktop-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Entity",["Field"],"Desktop"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Annotate"],
        "https://dl.acm.org/doi/abs/10.1145/1124772.1124965",//url
        //publication
        "Proceedings of the SIGCHI conference on Human Factors in computing systems. 2006: 1283-1292.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2010-TimeSpiderTree-TimeSeries-159",//id
        "Tree(2010)",//name
        //title
        "TimeSpiderTrees: A Novel Visual Metaphor for Dynamic Compound Graphs",
        "2010",//year
        //authors
        "Michael Burch, Michael Fritz,Fabian Beck, Stephan Diehl",
        //picturePath
        "../picture100/2010-TimeSpiderTree-TimeSeries.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Spatiotemporal"],"TimeSpiderTrees"],
        //application 应用场景
        ["DataAnaylysis"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Enjoy","Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/5635217",//url
        //publication
        "2010 IEEE Symposium on Visual Languages and Human-Centric Computing",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2008-Matrix-Navigation-160",//id
        "Matrix(2008)",//name
        //title
        "Rolling the Dice: Multidimensional Visual Exploration using Scatterplot Matrix Navigation",
        "2008",//year
        //authors
        "Niklas Elmqvist, Pierre Dragicevic, Jean-Daniel Fekete",
        //picturePath
        "../picture100/2008-Matrix-Navigation.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["MetaData"],"Matrix"],
        //application 应用场景
        ["DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Lookup"],
        "https://ieeexplore.ieee.org/abstract/document/4658123/",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 14, Issue: 6, Nov.-Dec. 2008)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2002-Lens-Interaction-161",//id
        "Lens(2002)",//name
        //title
        "The Through-The-Lens Metaphor: Taxonomy and Application",
        "2002",//year
        //authors
        "Stanislav L. Stoev∗, Dieter Schmalstieg† ,Wolfgang Straßer∗",
        //picturePath
        "../picture100/2002-Lens-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaciton","Entity",["Spatiotemporal"],"Lens"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Enjoy","Looup"],
        "https://ieeexplore.ieee.org/abstract/document/996541",//url
        //publication
        "Proceedings IEEE Virtual Reality 2002",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2007-Clock-TimeSeriesConversation-162",//id
        "Clock(2007)",//name
        //title
        "Conversation Clock: Visualizing audio patterns in co-located groups",
        "2007",//year
        //authors
        "Tony Bergstrom and Karrie Karahalios",
        //picturePath
        "../picture100/2007-Clock-TimeSeriesConversation.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Spatiotemporal","Unstructured"],"Clock"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/4076529",//url
        //publication
        "2007 40th Annual Hawaii International Conference on System Sciences (HICSS'07). IEEE, 2007.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2007-Radar-TimeSeriesConversation-163",//id
        "Radar(2007)",//name
        //title
        "Conversation Clock: Visualizing audio patterns in co-located groups",
        "2007",//year
        //authors
        "Tony Bergstrom and Karrie Karahalios",
        //picturePath
        "../picture100/2007-Radar-TimeSeriesConversation.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Spatiotemporal","Unstructured"],"Radar"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/4076529",//url
        //publication
        "2007 40th Annual Hawaii International Conference on System Sciences (HICSS'07). IEEE, 2007.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2020-Maps-Music-164",//id
        "Maps(2020)",//name
        //title
        "Content-based Organization and Visualization of Music Archives",
        "2020",//year
        //authors
        "Elias Pampalk,Andreas Rauber*,Dieter Merkl",
        //picturePath
        "../picture100/2020-Maps-Music.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Spatiotemporal","Unstructured"],"Maps"],
        //application 应用场景
        ["DigitHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/996541/",//url
        //publication
        "Proceedings IEEE Virtual Reality 2002",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2016-Tree-Text-165",//id
        "Tree(2016)",//name
        //title
        "A Design Study of Personal Bibliographic Data Visualization",
        "2016",//year
        //authors
        "Tsai-Ling Fung∗, Jia-Kai Chou†, Kwan-Liu Ma‡",
        //picturePath
        "../picture100/2016-Tree-Text.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Relational"],"Tree"],
        //application 应用场景
        ["Academic","DataAnalysis"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Enjoy","Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/7465279",//url
        //publication
        "2016 IEEE Pacific Visualization Symposium (PacificVis)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2008-Strip-Smoke-166",//id
        "Strip(2008)",//name
        //title
        "Smoke Surfaces: An Interactive Flow Visualization Technique Inspired by Real-World Flow Experiments",
        "2008",//year
        //authors
        "Tsai-Ling Fung; Jia-Kai Chou; Kwan-Liu Ma",
        //picturePath
        "../picture100/2008-Strip-Smoke.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Field"],"Strip"],
        //application 应用场景
        ["SciExperiment"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Attribute"],
        //task 任务/功能
        ["Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/4658155",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 14, Issue: 6, Nov.-Dec. 2008)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2016-DMap-SocialMedia-167",//id
        "DMap(2016)",//name
        //title
        "D-Map: Visual Analysis of Ego-centric Information Diffusion Patterns in Social Media",
        "2016",//year
        //authors
        "Siming Chen∗,Shuai Chen,Zhenhuang Wang,Jie Liang,Xiaoru Yuan,Nan Cao,Yadong Wu§",
        //picturePath
        "../picture100/2016-DMap-SocialMedia.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Relational","Spatiotemporal"],"Map"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Distance","Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Summarize"],
        "https://ieeexplore.ieee.org/abstract/document/7883510",//url
        //publication
        "2016 IEEE Conference on Visual Analytics Science and Technology (VAST)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2014-Flow-SocialMedia-168",//id
        "Flow(2014)",//name
        //title
        "#FluxFlow: Visual Analysis of Anomalous Information Spreading on Social Media",
        "2014",//year
        //authors
        "Jian Zhao, Nan Cao, Zhen Wen, Yale Song, Yu-Ru Lin, and Christopher Collins",
        //picturePath
        "../picture100/2014-Flow-SocialMedia.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Non-entity",["Spatiotemporal","Relational"],"Flow"],
        //application 应用场景
        ["DigitalHumanities","SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Topology"],
        //task 任务/功能
        ["Browse"],
        "https://ieeexplore.ieee.org/abstract/document/6876013",//url
        //publication
        "IEEE Transactions on Visualization and Computer Graphics ( Volume: 20, Issue: 12, Dec. 31 2014)",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2008-Garden-Inderaction-169",//id
        "Garden(2008)",//name
        //title
        "Activity Sensing in the Wild: A Field Trial of UbiFit Garden",
        "2008",//year
        //authors
        "Sunny Consolvo, David W. McDonald, Tammy Toscos, Mike Y. Chen, Jon Froehlich,Beverly Harrison, Predrag Klasnja, Anthony LaMarca, Louis LeGrand, Ryan Libby,Ian Smith, & James A. Landay",
        //picturePath
        "../picture100/2008-Garden-Inderaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Intercation","Entity",[""],"Garden"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Artistic design"],
        //task 任务/功能
        ["Annotate"],
        "https://dl.acm.org/doi/abs/10.1145/1357054.1357335",//url
        //publication
        "Proceedings of the SIGCHI conference on human factors in computing systems. 2008.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2009-BarrierTape-Interaction-170",//id
        "BarrierTape(2009)",//name
        //title
        "The Magic Barrier Tape: a Novel Metaphor for Infifinite Navigation in Virtual Worlds with a Restricted Walking Workspace",
        "2009",//year
        //authors
        "Gabriel Cirio,Maud Marchal,Tony Regia-Corte,Anatole L´ecuyer",
        //picturePath
        "../picture100/2009-BarrierTape-Interaction.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Interaction","Enttity",["Spatiotemporal"],"BarrierTape"],
        //application 应用场景
        ["HCI"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Interaction design"],
        //task 任务/功能
        ["Browse"],
        "https://dl.acm.org/doi/abs/10.1145/1643928.1643965",//url
        //publication
        "Proceedings of the 16th ACM Symposium on Virtual Reality Software and Technology",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2016-Tree-Vedio-171",//id
        "Tree(2016)",//name
        //title
        "VideoForest: Interactive Visual Summarization of Video Streams Based on Danmu Data",
        "2016",//year
        //authors
        "Zhida Sun∗, Mingfei Sun, Nan Cao, and Xiaojuan Ma",
        //picturePath
        "../picture100/2016-Tree-Vedio.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Unstructured"],"Tree"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Topology","Attribute"],
        //task 任务/功能
        ["Summarize"],
        "https://dl.acm.org/doi/abs/10.1145/3002151.3002159",//url
        //publication
        "SIGGRAPH ASIA 2016 Symposium on Visualization. 2016: 1-8.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2013-Map-text-172",//id
        "Map(2013)",//name
        //title
        "Interactive Visualization of Streaming Text Data with Dynamic Maps",
        "2013",//year
        //authors
        "Gansner, Emden R., Yifan Hu, and Stephen C. North",
        //picturePath
        "../picture100/2013-Map-text.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Relational"],"Map"],
        //application 应用场景
        ["SocialMedia"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Topology","Attribute","Hybrid"],
        //task 任务/功能
        ["Summarize"],
        "http://yifanhu.net/PUB/twitter_scope.pdf",//url
        //publication
        "J. Graph Algorithms Appl., 2013, 17(4): 515-540.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
    new Content(
        "2018-Landscape-Film-173",//id
        "Landscape(2018)",//name
        //title
        "A 3D Item Space Visualization for Presenting and Manipulating User Preferences in Collaborative Filtering",
        "2018",//year
        //authors
        "Johannes Kunkel,Benedikt Loepp,Jürgen Ziegler",
        //picturePath
        "../picture100/2018-Landscape-Film.png",
        //group:Form / Interaction, Z / R / F / D / K , 1 ~ 13 , shape
        ["Form","Entity",["Structured"],"Landscape"],
        //application 应用场景
        ["DigitalHumanities"],
        //constructMethod 构建隐喻的方法:Attribute Tolopogy Distance Hybrid
        ["Topoogy","Attritube"],
        //task 任务/功能
        ["Present"],
        "https://dl.acm.org/doi/abs/10.1145/3025171.3025189",//url
        //publication
        "Proceedings of the 22nd international conference on intelligent user interfaces.",
        //innerContent
        {
            Abstract:"",
            Func:[""],
            Feature:[""]
        }
    ),
]