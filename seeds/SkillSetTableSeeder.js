var skillSetSchema = require('../schema/SkillSetsSchema');
var skillSetData = [
{
    		category_id : 1,
    		name : 'Software Engineering',
},
{
    		category_id : 1,
    		name : 'PHP',
},
{
    		category_id : 1,
    		name : 'Big D',
},
{
    		category_id : 1,
    		name : 'HTML',
},
{
    		category_id : 1,
    		name : 'WordPress',
},
{
    		category_id : 1,
    		name : 'JavaScript',
},
{
    		category_id : 1,
    		name : 'Software Architecture',
},
{
    		category_id : 1,
    		name : 'MySQL',
},
{
    		category_id : 1,
    		name : 'Java',
},
{
    		category_id : 1,
    		name : 'Big Data',
},
{
    		category_id : 1,
    		name : 'Data Science & Analytics',
},
{
    		category_id : 1,
    		name : 'SEO',
},
{
    		category_id : 1,
    		name : 'Python',
},
{
    		category_id : 1,
    		name : 'eCommerce',
},
{
    		category_id : 1,
    		name : 'C Programming',
},
{
    		category_id : 1,
    		name : 'C# Programming ',
},
{
    		category_id : 1,
    		name : 'Link Building ',
},
{
    		category_id : 1,
    		name : 'C++ Programming',
},
{
    		category_id : 1,
    		name : 'Web Scraping',
},
{
    		category_id : 1,
    		name : 'node.js',
},
{
    		category_id : 1,
    		name : 'Blog Install',
},
{
    		category_id : 1,
    		name : 'Objective C',
},
{
    		category_id : 1,
    		name : 'Shopify',
},
{
    		category_id : 1,
    		name : 'Angular.js',
},
{
    		category_id : 1,
    		name : 'Laravel',
},
{
    		category_id : 1,
    		name : '.NET',
},
{
    		category_id : 1,
    		name : 'Game Development',
},
{
    		category_id : 1,
    		name : 'Game Development',
},
{
    		category_id : 1,
    		name : 'React.js',
},
{
    		category_id : 1,
    		name : 'System Admin ',
},
{
    		category_id : 1,
    		name : 'User Interface / IA ',
},
{
    		category_id : 1,
    		name : 'Unity 3D ',
},

{
    		category_id : 1,
    		name: 'Web Development'
},

{
    		category_id : 1,
    		name: 'Visual Basic '
},

{
    		category_id : 1,
    		name: 'Amazon Web Services '
},

{
    		category_id : 1,
    		name: 'Social Media Management'
},

{
    		category_id : 1,
    		name: 'Web Hosting '
},

{
    		category_id : 1,
    		name: 'YouTube '
},

{
    		category_id : 1,
    		name: 'React Native (136 )'
},

{
    		category_id : 1,
    		name: 'jQuery / Prototype (133 )'
},

{
    		category_id : 1,
    		name: 'Digital Marketing (125 )'
},

{
    		category_id : 1,
    		name: 'Software Development (123 )'
},

{
    		category_id : 1,
    		name: 'Game Design (122 )'
},

{
    		category_id : 1,
    		name: 'iOS Development (122 )'
},

{
    		category_id : 1,
    		name: 'ASP.NET (117 )'
},

{
    		category_id : 1,
    		name: 'SQL (113 )'
},

{
    		category_id : 1,
    		name: 'Swift (113 )'
},

{
    		category_id : 1,
    		name: 'Shopping Carts (111 )'
},

{
    		category_id : 1,
    		name: 'Magento (109 )'
},

{
    		category_id : 1,
    		name: 'Microsoft SQL Server (107 )'
},

{
    		category_id : 1,
    		name: 'Network Administration (103 )'
},

{
    		category_id : 1,
    		name: 'Programming (92 )'
},

{
    		category_id : 1,
    		name: 'Codeigniter (83 )'
},

{
    		category_id : 1,
    		name: 'API (83 )'
},

{
    		category_id : 1,
    		name: 'Instagram (82 )'
},

{
    		category_id : 1,
    		name: 'Flutter (80 )'
},

{
    		category_id : 1,
    		name: 'Django (79 )'
},

{
    		category_id : 1,
    		name: 'Software Testing (78 )'
},

{
    		category_id : 1,
    		name: 'Database Programming (74 )'
},

{
    		category_id : 1,
    		name: 'Metatrader (72 )'
},

{
    		category_id : 1,
    		name: 'Web Security (71 )'
},

{
    		category_id : 1,
    		name: 'Ionic Framework (70 )'
},

{
    		category_id : 1,
    		name: 'NoSQL Couch & Mongo (68 )'
},

{
    		category_id : 1,
    		name: 'Ubuntu (67 )'
},

{
    		category_id : 1,
    		name: 'Express JS (62 )'
},

{
    		category_id : 1,
    		name: 'Database Administration (61 )'
},

{
    		category_id : 1,
    		name: 'Artificial Intelligence (61 )'
},

{
    		category_id : 1,
    		name: 'Full Stack Development (61 )'
},

{
    		category_id : 1,
    		name: 'PhoneGap (60 )'
},

{
    		category_id : 1,
    		name: 'Google Analytics (58 )'
},

{
    		category_id : 1,
    		name: 'Coding (57 )'
},

{
    		category_id : 1,
    		name: 'XML (55 )'
},

{
    		category_id : 1,
    		name: 'App Developer (55 )'
},

{
    		category_id : 1,
    		name: 'R Programming Language (54 )'
},

{
    		category_id : 1,
    		name: 'Database Development (53 )'
},

{
    		category_id : 1,
    		name: 'Computer Security (51 )'
},

{
    		category_id : 1,
    		name: 'VB.NET (51 )'
},

{
    		category_id : 1,
    		name: 'Social Media Management'
},

{
    		category_id : 1,
    		name: 'VoIP'
},

{
    		category_id : 1,
    		name: 'JSON (48 )'
},

{
    		category_id : 1,
    		name: 'Google Firebase (48 )'
},

{
    		category_id : 1,
    		name: 'AJAX (47 )'
},

{
    		category_id : 1,
    		name: 'SPSS Statistics'
},

{
    		category_id : 1,
    		name: 'Payment Gateway Integration'
},

{
    		category_id : 1,
    		name: 'RESTful API'
},

{
    		category_id : 1,
    		name: 'React.js Framework (46 )'
},

{
    		category_id : 1,
    		name: 'Windows Server (45 )'
},

{
    		category_id : 1,
    		name: 'Open Cart (45'
},

{
    		category_id : 1,
    		name: 'jQuery (45 )'
},

{
    		category_id : 1,
    		name: 'Vue.js (44 )'
},

{
    		category_id : 1,
    		name: 'Website Management (43 )'
},

{
    		category_id : 1,
    		name: 'Blockchain (43 )'
},

{
    		category_id : 1,
    		name: 'Adobe Illustrator (43 )'
},

{
    		category_id : 1,
    		name: 'Backend Development (43 )'
},

{
    		category_id : 1,
    		name: 'Website Testing (41 )'
},

{
    		category_id : 1,
    		name: 'Visual Basic for Apps (41 )'
},

{
    		category_id : 1,
    		name: 'Testing / QA (40 )'
},

{
    		category_id : 1,
    		name: 'Asterisk PBX (40 )'
},

{
    		category_id : 1,
    		name: 'Computer Science (39 )'
},

{
    		category_id : 1,
    		name: 'Microsoft Access (38 )'
},

{
    		category_id : 1,
    		name: 'Moodle (38 )'
},

{
    		category_id : 1,
    		name: 'Shopify Development (38 )'
},

{
    		category_id : 1,
    		name: 'Plugin (37 )'
},

{
    		category_id : 1,
    		name: 'MongoDB (37 )'
},

{
    		category_id : 1,
    		name: 'Sharepoint (35 )'
},

{
    		category_id : 1,
    		name: 'Cloud Computing (34 )'
},

{
    		category_id : 1,
    		name: 'Apache (34 )'
},

{
    		category_id : 1,
    		name: 'Linkedin (34 )'
},

{
    		category_id : 1,
    		name: 'Ruby on Rails (33 )'
},

{
    		category_id : 1,
    		name: 'Azure (33 )'
},

{
    		category_id : 1,
    		name: 'Microsoft (33 )'
},

{
    		category_id : 1,
    		name: 'Google Maps API (33 )'
},

{
    		category_id : 1,
    		name: 'Raspberry Pi (33 )'
},

{
    		category_id : 1,
    		name: 'Docker (33 )'
},

{
    		category_id : 1,
    		name: 'Server (33 )'
},

{
    		category_id : 1,
    		name: 'J2EE (32 )'
},

{
    		category_id : 1,
    		name: 'CSS3 (31 )'
},

{
    		category_id : 1,
    		name: 'OpenCV (30 )'
},

{
    		category_id : 1,
    		name: 'Drupal (29 )'
},

{
    		category_id : 1,
    		name: 'Magento 2 (29 )'
},

{
    		category_id : 1,
    		name: 'Cisco (28 )'
},

{
    		category_id : 1,
    		name: 'Test Automation (28 )'
},

{
    		category_id : 1,
    		name: 'Google Chrome (28 )'
},

{
    		category_id : 1,
    		name: 'Drawing (28 )'
},

{
    		category_id : 1,
    		name: 'Java Spring (28 )'
},

{
    		category_id : 1,
    		name: 'PostgreSQL (27 )'
},

{
    		category_id : 1,
    		name: 'Google App Engine (26 )'
},

{
    		category_id : 1,
    		name: 'Shell Script (26 )'
},

{
    		category_id : 1,
    		name: 'Git (26 )'
},

{
    		category_id : 1,
    		name: 'Odoo (26 )'
},

{
    		category_id : 1,
    		name: 'Apple Xcode (26 )'
},

{
    		category_id : 1,
    		name: 'UNIX (25 )'
},

{
    		category_id : 1,
    		name: 'Bitcoin (25 )'
},

{
    		category_id : 1,
    		name: 'Microsoft Azure (25 )'
},

{
    		category_id : 1,
    		name: '.NET Core (25 )'
},

{
    		category_id : 1,
    		name: 'Joomla (24 )'
},

{
    		category_id : 1,
    		name: 'PayPal API (24 )'
},

{
    		category_id : 1,
    		name: 'JavaFX (23 )'
},

{
    		category_id : 1,
    		name: 'DNS (23 )'
},

{
    		category_id : 1,
    		name: 'Nginx (23 )'
},

{
    		category_id : 1,
    		name: 'Frontend Development (23 )'
},

{
    		category_id : 1,
    		name: 'SAP (22 )'
},

{
    		category_id : 1,
    		name: 'Internet Security (22 )'
},

{
    		category_id : 1,
    		name: 'Network Engineering (22 )'
},

{
    		category_id : 1,
    		name: 'Oracle'
},

{
    		category_id : 1,
    		name: 'MVC'
},

{
    		category_id : 1,
    		name: 'WHMCS'
},

{
    		category_id : 1,
    		name: 'Mobile App Testing'
},

{
    		category_id : 1,
    		name: 'Adobe Premiere Pro'
},

{
    		category_id : 1,
    		name: '3D Animation'
},

{
    		category_id : 1,
    		name: 'Blender'
},

{
    		category_id : 1,
    		name: 'Embedded Software'
},

{
    		category_id : 1,
    		name: 'Golang (20 )'
},

{
    		category_id : 1,
    		name: 'Ethereum (20 )'
},

{
    		category_id : 1,
    		name: 'Typing (20 )'
},

{
    		category_id : 1,
    		name: 'Google Cloud Platform'
},

{
    		category_id : 1,
    		name: 'Big Data Sales'
},

{
    		category_id : 1,
    		name: 'Socket IO'
},

{
    		category_id : 1,
    		name: 'Web Services'
},

{
    		category_id : 1,
    		name: 'Augmented Reality'
},

{
    		category_id : 1,
    		name: 'Facebook API'
},

{
    		category_id : 1,
    		name: 'Tensorflow'
},

{
    		category_id : 1,
    		name: 'Data Visualization'
},

{
    		category_id : 1,
    		name: 'Website Optimization'
},

{
    		category_id : 1,
    		name: 'Elasticsearch'
},

{
    		category_id : 1,
    		name: 'Lua'
},

{
    		category_id : 1,
    		name: 'Typescript'
},

{
    		category_id : 1,
    		name: 'Scripting'
},

{
    		category_id : 1,
    		name: 'Instagram API'
},

{
    		category_id : 1,
    		name: 'Pytorch'
},

{
    		category_id : 1,
    		name: 'Unreal Engine'
},

{
    		category_id : 1,
    		name: 'Facebook Pixel'
},

{
    		category_id : 1,
    		name: 'Computer Vision'
},

{
    		category_id : 1,
    		name: 'Google Sheets'
},

{
    		category_id : 1,
    		name: 'Ruby'
},

{
    		category_id : 1,
    		name: 'Stripe'
},

{
    		category_id : 1,
    		name: 'FlutterWave'
},

{
    		category_id : 1,
    		name: 'Paystack'
},

{
    		category_id : 1,
    		name: 'Learning Management Systems'
},

{
    		category_id : 1,
    		name: 'Microsoft Exchange'
},

{
    		category_id : 1,
    		name: 'eLearning'
},

{
    		category_id : 1,
    		name: 'Debian'
},

{
    		category_id : 1,
    		name: 'Tableau'
},

{
    		category_id : 1,
    		name: 'Xamarin'
},

{
    		category_id : 1,
    		name: 'Flask'
},

{
    		category_id : 1,
    		name: 'Web API'
},

{
    		category_id : 1,
    		name: 'Power BI'
},

{
    		category_id : 1,
    		name: 'ASP.NET MVC'
},

{
    		category_id : 1,
    		name: 'Google APIs'
},

{
    		category_id : 1,
    		name: 'Redux.js'
},

{
    		category_id : 1,
    		name: 'ASP'
},

{
    		category_id : 1,
    		name: 'Angular Material'
},

{
    		category_id : 1,
    		name: 'Office 365'
},

{
    		category_id : 1,
    		name: 'GitHub'
},

{
    		category_id : 1,
    		name: 'RESTful'
},

{
    		category_id : 1,
    		name: 'Android Wear SDK'
},

{
    		category_id : 1,
    		name: 'Cinematography'
},

{
    		category_id : 1,
    		name: 'Vue.js Framework'
},

{
    		category_id : 1,
    		name: 'Zoho'
},

{
    		category_id : 1,
    		name: 'Mobile Development'
},

{
    		category_id : 1,
    		name: 'Selenium'
},

{
    		category_id : 1,
    		name: 'JSP'
},

{
    		category_id : 1,
    		name: 'Dart'
},

{
    		category_id : 1,
    		name: 'Docker'
},

{
    		category_id : 1,
    		name: 'Salesforce App Development'
},

{
    		category_id : 1,
    		name: 'Growth Hacking'
},

{
    		category_id : 1,
    		name: 'Object Oriented Programming (OOP)'
},

{
    		category_id : 1,
    		name: 'Facebook Development'
},

{
    		category_id : 1,
    		name: 'UML Design'
},

{
    		category_id : 1,
    		name: 'Prolog'
},

{
    		category_id : 1,
    		name: 'vTiger'
},

{
    		category_id : 1,
    		name: 'Computer Graphics'
},

{
    		category_id : 1,
    		name: 'Hadoop'
},

{
    		category_id : 1,
    		name: 'OpenGL'
},

{
    		category_id : 1,
    		name: 'Business Intelligence'
},

{
    		category_id : 1,
    		name: 'SEO Auditing'
},

{
    		category_id : 1,
    		name: 'Scrapy'
},

{
    		category_id : 1,
    		name: 'Aws Lambda'
},

{
    		category_id : 1,
    		name: 'Firmware'
},

{
    		category_id : 1,
    		name: 'Twilio'
},

{
    		category_id : 1,
    		name: 'D3.js'
},

{
    		category_id : 1,
    		name: 'Algorithm Analysis'
},

{
    		category_id : 1,
    		name: 'Usability Testing'
},

{
    		category_id : 1,
    		name: 'Face Recognition'
},

{
    		category_id : 1,
    		name: 'Game Consoles'
},

{
    		category_id : 1,
    		name: 'Embedded System Design'
},

{
    		category_id : 1,
    		name: 'Hardware Design'
},

{
    		category_id : 1,
    		name: 'Analytics'
},

{
    		category_id : 1,
    		name: 'Spark'
},

{
    		category_id : 1,
    		name: 'Bower'
},

{
    		category_id : 1,
    		name: 'SketchPad'
},

{
    		category_id : 1,
    		name: 'Sketching'
},

{
    		category_id : 1,
    		name: 'Website Analytics'
},

{
    		category_id : 1,
    		name: 'Jenkins'
},

{
    		category_id : 1,
    		name: 'HTTP'
},

{
    		category_id : 1,
    		name: 'CentOs'
},

{
    		category_id : 1,
    		name: 'Email Developer'
},

{
    		category_id : 1,
    		name: 'Swing (Java)'
},

{
    		category_id : 1,
    		name: 'Bash Scripting'
},

{
    		category_id : 1,
    		name: 'Selenium Webdriver'
},

{
    		category_id : 1,
    		name: 'Xcodebuild'
},

{
    		category_id : 1,
    		name: 'Pine Script'
},

{
    		category_id : 1,
    		name: 'Microsoft Project'
},

{
    		category_id : 1,
    		name: 'Network Security'
},

{
    		category_id : 1,
    		name: 'Cyber Security'
},

{
    		category_id : 1,
    		name: 'MEAN Stack'
},

{
    		category_id : 1,
    		name: 'Script Install'
},

{
    		category_id : 1,
    		name: 'Dthreejs'
},

{
    		category_id : 1,
    		name: 'SQLite'
},

{
    		category_id : 1,
    		name: 'Geographical Information System (GIS)'
},

{
    		category_id : 1,
    		name: 'Copyright'
},

{
    		category_id : 1,
    		name: 'Qt'
},

{
    		category_id : 1,
    		name: 'Twitter API'
},

{
    		category_id : 1,
    		name: 'Documentation'
},

{
    		category_id : 1,
    		name: 'Revit Architecture'
},

{
    		category_id : 1,
    		name: 'Agile Project Management'
},

{
    		category_id : 1,
    		name: 'Delphi'
},

{
    		category_id : 1,
    		name: 'Windows API'
},

{
    		category_id : 1,
    		name: 'Bluetooth Low Energy (BLE)'
},

{
    		category_id : 1,
    		name: 'Powershell'
},

{
    		category_id : 1,
    		name: 'OpenVPN'
},

{
    		category_id : 1,
    		name: 'Virtual Machines'
},

{
    		category_id : 1,
    		name: 'Amazon S3'
},

{
    		category_id : 1,
    		name: 'MQL4'
},

{
    		category_id : 1,
    		name: 'Symfony PHP'
},

{
    		category_id : 1,
    		name: 'Plesk'
},

{
    		category_id : 1,
    		name: 'Agile Development.'
},

{
    		category_id : 1,
    		name: 'MariaDB'
},

{
    		category_id : 1,
    		name: 'VMware'
},

{
    		category_id : 1,
    		name: 'Redis'
},

{
    		category_id : 1,
    		name: 'Data Warehousing'
},

{
    		category_id : 1,
    		name: 'OAuth'
},

{
    		category_id : 1,
    		name: 'Web Crawling'
},

{
    		category_id : 1,
    		name: 'Graphics Programming'
},

{
    		category_id : 1,
    		name: 'Revit'
},

{
    		category_id : 1,
    		name: 'Kubernetes'
},

{
    		category_id : 1,
    		name: 'Amazon App Development'
},

{
    		category_id : 1,
    		name: 'Prototyping'
},

{
    		category_id : 1,
    		name: 'Zoho Creator'
},

{
    		category_id : 1,
    		name: 'Advanced Business Application Programming'
},

{
    		category_id : 1,
    		name: 'Active Directory'
},

{
    		category_id : 1,
    		name: 'vBulletin'
},

{
    		category_id : 1,
    		name: 'Haskell'
},

{
    		category_id : 1,
    		name: 'Snapchat'
},

{
    		category_id : 1,
    		name: 'Heroku'
},

{
    		category_id : 1,
    		name: 'OpenSSL'
},

{
    		category_id : 1,
    		name: 'Eclipse'
},

{
    		category_id : 1,
    		name: 'Corel Draw'
},

{
    		category_id : 1,
    		name: 'BeautifulSoup'
},

{
    		category_id : 1,
    		name: 'VBScript'
},

{
    		category_id : 1,
    		name: 'Julia Language'
},

{
    		category_id : 1,
    		name: 'Open Source'
},

{
    		category_id : 1,
    		name: 'NetSuite'
},

{
    		category_id : 1,
    		name: 'Atlassian Jira'
},

{
    		category_id : 1,
    		name: 'Webflow'
},

{
    		category_id : 1,
    		name: 'Cloud Development'
},

{
    		category_id : 1,
    		name: 'Google Docs'
},

{
    		category_id : 1,
    		name: 'A/B Testing'
},

{
    		category_id : 1,
    		name: 'Map Reduce'
},

{
    		category_id : 1,
    		name: 'VPS'
},

{
    		category_id : 1,
    		name: 'Scheme'
},

{
    		category_id : 1,
    		name: 'Cassandra'
},

{
    		category_id : 1,
    		name: 'Apache Maven'
},

{
    		category_id : 1,
    		name: 'ARKit'
},

{
    		category_id : 1,
    		name: 'Push Notification'
},

{
    		category_id : 1,
    		name: 'SSIS (SQL Server Integration Services)'
},

{
    		category_id : 1,
    		name: 'Oracle Database'
},

{
    		category_id : 1,
    		name: 'ETL'
},

{
    		category_id : 1,
    		name: 'Airtable'
},

{
    		category_id : 1,
    		name: 'Cloud Networking'
},

{
    		category_id : 1,
    		name: 'Certified Information Systems Security Professional (CISSP)'
},

{
    		category_id : 1,
    		name: 'Application Performance Monitoring.'
},

{
    		category_id : 1,
    		name: 'Erlang'
},

{
    		category_id : 1,
    		name: 'Fortran'
},

{
    		category_id : 1,
    		name: 'AutoHotkey'
},

{
    		category_id : 1,
    		name: 'LabVIEW'
},

{
    		category_id : 1,
    		name: 'Scrum Development'
},

{
    		category_id : 1,
    		name: 'Debugging'
},

{
    		category_id : 1,
    		name: 'CS-Cart'
},

{
    		category_id : 1,
    		name: 'Google Web Toolkit'
},

{
    		category_id : 1,
    		name: '4D'
},

{
    		category_id : 1,
    		name: 'Scala'
},

{
    		category_id : 1,
    		name: 'Scrum'
},

{
    		category_id : 1,
    		name: 'LESS/Sass/SCSS'
},

{
    		category_id : 1,
    		name: 'Weebly'
},

{
    		category_id : 1,
    		name: 'Google Cloud Storage'
},

{
    		category_id : 1,
    		name: 'Adobe Captivate'
},

{
    		category_id : 1,
    		name: 'Storage Area Networks'
},

{
    		category_id : 1,
    		name: 'Penetration Testing'
},

{
    		category_id : 1,
    		name: 'Solutions Architecture'
},

{
    		category_id : 1,
    		name: 'Data Integration'
},

{
    		category_id : 1,
    		name: 'ERP Software'
},

{
    		category_id : 1,
    		name: 'Java Technical Architecture'
},

{
    		category_id : 1,
    		name: 'Salesforce Marketing Cloud'
},

{
    		category_id : 1,
    		name: 'Cocoa'
},

{
    		category_id : 1,
    		name: 'Zend'
},

{
    		category_id : 1,
    		name: 'XSLT (2 )'
},

{
    		category_id : 1,
    		name: 'Red Hat'
},

{
    		category_id : 1,
    		name: 'Google Webmaster Tools'
},

{
    		category_id : 1,
    		name: 'Virtual Reality'
},

{
    		category_id : 1,
    		name: 'PostreSQL'
},

{
    		category_id : 1,
    		name: 'NoSQL'
},

{
    		category_id : 1,
    		name: 'Apache Hadoop'
}
]

function run() {
    
}