export const categoriesData = [
    {
        id: 'cat1',
        name: 'Overview',
        subcategories: [
            {
                id: 'partners',
                name: '',
                items: [
                    {
                        logo: 'assets/partner/B2.png',
                        name: '斯坦福大学医学院亚裔肝脏中心 | Asian Liver Center-Stanford Medicine',
                        email: 'jadeinchina@163.com',
                        website: '<a href="https://med.stanford.edu/liver.html" target="_blank" rel="noopener noreferrer">Official Website</a>'
                    },
                    {
                        logo: 'assets/partner/B1.png',
                        name: 'FinTeens',
                        email: '',
                        website: '<a href="https://www.fin-teens.com/home" target="_blank" rel="noopener noreferrer">Official Website</a>' +
                            '<br>' +  // Line break
                            '<a href="https://docs.google.com/forms/d/e/1FAIpQLSeLNUc0hb8o1Ny0GMKYl6ZyVhptCQRmNzcgk1VltF8ZQ8qqKg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">FinTeens member form (open to everyone)</a>'
                    },
                    {
                        logo: 'assets/partner/B3.png',
                        name: '食尚 | Health and Wellness',
                        email: 'info@healthandwellness.com.cn',
                        website: '<a href="https://www.healthandwellness.com.cn/" target="_blank" rel="noopener noreferrer">Official Website</a>'
                    },
                    {
                        logo: 'assets/partner/FilmieFilm2.png',
                        name: 'FilmieFilm Festival',
                        email: 'filmiefilmks@gmail.com',
                        description: '影迹电影节（FilmieFilm Festival）是一场由北京市鼎石学校学生发起的青少年电影节。我们致力于促进青少年电影教育，连接、聚集青少年电影爱好者，分享中国青少年的原创影片，并提供与电影专业人士互动的机会。\n' +
                            'FilmieFilm Festival is a film festival for teenagers initiated by students from Keystone Academy in Beijing. We are dedicated to promoting film education, connecting and gathering youth film enthusiasts, sharing original films by Chinese youth, and providing opportunities to interact with film professionals.\n'
                    },
                    {
                        logo: 'assets/partner/Dispatio.png',
                        name: 'Dispatio',
                        email: 'dispatio2022@outlook.com',
                        website: '<a href="https://dispatio.wordpress.com" target="_blank" rel="noopener noreferrer">Official Website</a>',
                        description : `Dispatio is dedicated to building an online community revolving around perceiving our surroundings with use of critical thinking. Dispatio consists of two components. One being the monthly online articles from student submissions, to date, we published 20 articles. The other being the online courses which cover content ranging from American history to reading and critical thinking.\nDispatio 致力于建立一个以批判性思考的角度看待社会为中心的在线社区。Dispatio 由两部分组成。一、每个月发布学生投稿的，截至目前，我们已经发表了 20 篇文章。另一个是在线课程，内容涵盖美国历史、阅读和批判性思维。`
                    },
                    {
                        logo: 'assets/partner/Bingo.png',
                        name: 'Bingo Translation Group',
                        email: 'yehongru8@163.com',
                        description: 'Founded in 2022, the Bingo Translation Group aims to foster mutual assistance and intercultural understanding through bilingual translation services. We envision a future where language differences no longer hinder cooperation among diverse cultures, leading to increased mutual support on a global scale.\n' +
                            '缤果翻译成立于 2022 年，致力于通过双语翻译服务促进国际间的互助与跨文化理解。在我们憧憬中的未来中，语言的隔阂将不再阻碍不同文化之间的互助和理解。\n' +
                            'We provide English-to-Chinese and offer Chinese-to-English translation services, including documents, data, reports, video transcripts, interpretation etc. \n' +
                            '我们提供中英互译服务：涵盖文件、数据、报告等任何形式。\n' +
                            'The Bingo Translation Group comprises 50+ bilingual volunteers from around the world. we are the exclusive translation partner for the Chinese Red Cross Foundation\'s "Free Lunch for Children" initiative, completing over 200 monthly, annual, and financial reports from recipient schools. Other partners include educational foundations, UN projects and untangible heritage protection causes.  \n' +
                            '缤果翻译拥有来自全球的 50+ 名志愿者。 我们与中国红十字基金会合作，独家翻译“国际免费午餐”项目，已完成 200 余份月度、年度和财务报告。其他合作伙伴包括教育基金会，联合国项目，非遗保护组织等。\n'
                    },
                    {
                        //logo: 'assets/partner/CTSA.png',
                        name: 'CTSA Speeching & Social Activism',
                        email: '',
                        description: ''
                    },
                    {
                        //logo: 'assets/partner/Curieux.png',
                        name: 'Curieux',
                        email:  'cajjournal@gmail.com',
                        website: '<a href="https://www.curieuxacademiciournal.com/" target="_blank" rel="noopener noreferrer">Official Website</a>',
                        description: 'The Curieux Academic Journal is a youth-led nonprofit  founded in 2017 to publish exceptional research by high school and middle school students.\n' +
                            'Curieux 学术期刊是一个由青年领导的非营利组织，创办于 2017 年，旨在发表高中和初中学生的杰出研究成果。\n'
                    },
                    // More partners...
                ]
            },
            {
                id: 'members',
                name: 'NEST Members',
                items: [
                    {
                        logo: 'assets/schoolLogo/ks.png',
                        name: 'Keystone Academy 北京市鼎石学校',
                        email: 'service.council@keystoneacademy.cn',
                        description: '',
                        school: ''
                    },
                    {
                        logo: 'assets/schoolLogo/C2.png',
                        name: 'Beijing Huijia Private School 北京汇佳私立学校',
                        email: '26huangyuxi@huijia.edu.cn',
                        description: '',
                        school: ''
                    },
                    {
                        logo: 'assets/schoolLogo/C3.png',
                        name: 'Beijing Haidian Kaiwen Academy 北京海淀凯文学校',
                        email: 'Student.Council@hd.kaiwenacademy.cn',
                        description: '',
                        school: ''
                    },
                    {
                        logo: 'assets/schoolLogo/C4.png',
                        name: 'RCF Experimental School A- Level Center 人大附中朝阳分校国际部',
                        email: 'zhangjunru@rdfzcygj.cn',
                        description: '',
                        school: ''
                    },
                    {
                        logo: 'assets/schoolLogo/shiqing.jpeg',
                        name: 'Beijing World Youth Academy 北京世青国际学校',
                        email: 'pending',
                        description: '',
                        school: ''
                    },
                    {
                        logo: 'assets/schoolLogo/beishida.png',
                        name: 'The Experimental High School Attached to Beijing Normal University 北师大附属实验中学国际',
                        email: 'pending',
                        description: '',
                        school: ''
                    },
                    {
                        logo: 'assets/schoolLogo/C7.png',
                        name: 'Montverde Academy Shanghai 上海梦沃未来学院',
                        email: 'gloria_wu2007@163.com',
                        description: '',
                        school: ''
                    },
                    {
                        logo: 'assets/schoolLogo/C8.png',
                        name: 'Beijing City International School 北京乐成国际学校',
                        email: 'margaretyang11@hotmail.com',
                        description: '',
                        school: ''
                    },
                    {
                        logo: 'assets/schoolLogo/BIBA.png',
                        name: 'Beijing International Bilingual Academy 北京市海嘉学校',
                        email: 'sissihuang0806@gmail.com',
                        description: '',
                        school: ''
                    },
                    {
                        logo: 'assets/schoolLogo/wangfu.png',
                        name: 'Beijing Royal School 北京王府学校',
                        email: 'elsabi20080126@gmail.com',
                        description: '',
                        school: ''
                    },
                    {
                        logo: 'assets/schoolLogo/Daystar.png',
                        name: 'Daystar Academy 启明星学校',
                        email: '7442@daystaracademy.cn',
                        description: '',
                        school: ''
                    },
                    {
                        logo: 'assets/schoolLogo/C11.png',
                        name: 'Aidi International School 北京爱迪国际学校',
                        email: 'pending',
                        description: '',
                        school: ''
                    },
                    {
                        logo: 'assets/schoolLogo/shiyi.png',
                        name: 'Beijing National Day School 北京十一学校',
                        email: 'zhouruining1016@outlook.com',
                        description: '',
                        school: ''
                    },
                    {
                        logo: 'assets/schoolLogo/dulwich.png',
                        name: 'Dulwich College Beijing 北京德威英国国际学校',
                        email: 'alex.liu@stu.dulwich.org\n' +
                            'Daniel.li25@stu.dulwich.org\n',
                        description: '',
                        school: ''
                    },
                    {
                        logo: 'assets/schoolLogo/C13.png',
                        name: '北京中学国际部',
                        email: 'maxchen0416@gmail.com',
                        description: '',
                        school: ''
                    },
                    {
                        logo: 'assets/schoolLogo/bashi.png',
                        name: '八十中国际部',
                        email: 'great_goldfish@sina.com',
                        description: '',
                        school: ''
                    },
                    {
                        logo: 'assets/schoolLogo/pinghe.png',
                        name: 'Shanghai Pinghe School 上海市民办平和学校',
                        email: 'zhukexin@shphschool.com\n' +
                            'baoshutong1@yeah.net\n',
                        description: '',
                        school: ''
                    },
                    {
                        logo: 'assets/schoolLogo/guangzhou.png',
                        name: 'Guangzhou Foreign Language School 广州外国语学校',
                        email: 'Dave17771799901@gmail.com',
                        description: '',
                        school: ''
                    },
                    {
                        logo: 'assets/schoolLogo/C15.png',
                        name: 'Xi\'an Foreign Language School 西安外国语国际部',
                        email: '15891570218@163.com',
                        description: '',
                        school: ''
                    },
                    {
                        logo: 'assets/schoolLogo/C16.png',
                        name: 'NLCSS',
                        email: 'Tiffanywang2006@outlook.com',
                        description: '',
                        school: ''
                    },

                    // More members...
                ]
            }
        ]
    },

];

export default categoriesData