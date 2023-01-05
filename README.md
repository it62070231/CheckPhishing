# CheckPhishing
CheckPhishing เป็นส่วนหนึ่งของรายวิชา Senior Project ของสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง

โดยมีผู้จัดทำ ดังนี้

1. นาย กิตติธัช ศรีฉัตรสุวรรณ
2. นาย จิรายุ จุลกทัพพะ

CheckPhishing เป็น Chrome Extension ที่ถูกสร้างขึ้นเพื่อตรวจจับเว็บไซต์ฉ้อโกง เพื่อให้ผู้ใช้สามารถท่องเว็บไซต์ได้อย่างปลอดภัย โดยโปรแกรมจะทำงานผ่าน API ที่สร้างโดย FastAPI ที่ทำงานบน Cloud ซึ่งเราได้เลือกใช้ AWS Lambda เป็นเครื่องบน Cloud เพื่อใช้ในการรันฟังก์ชั่น และใช้ AWS S3 เป็นแหล่งเก็บข้อมูลของเรา

CheckPhishing ได้ถูกสร้างขึ้นมาจากการฝึกฝนโมเดล Machine Learning เพื่อทำการหาเว็บไซต์ฉ้อโกง โดยทางผู้จัดทำได้ทำการทดลองทั้งหมด 7 โมเดลด้วยกัน ได้แก่ Logistic Regression, K- Nearest Neighbor, Support Vector Machine, Decision Tree, Random Forest, AdaBoost และ XGBoost โดยโมเดลที่ดีที่สุดที่ได้จากการทดลองคือ XGBoost ซึ่งมีผลลัพธ์ในการตรวจจับเว็บไซต์ฉ้อโกงถึง 96% 

แหล่งข้อมูลและลักษณะฟีเจอร์ที่ใช้งานในงานวิจัยนี้ - https://data.mendeley.com/datasets/c2gw7fy2j4/3


-------------------------------------------------------------------------------------------------------------------------------
# CheckPhishing
CheckPhishing is part of the Senior Project course at King Mongkut's Institute of Technology Ladkrabang.

The organizers are as follows:

1. Mr. Kittitad Scrichatsuwan
2. Mr. Jirayu Chulakadabba

CheckPhishing is a Chrome Extension created to detect phishing websites. So that users can surf the website safely. The program runs through an API built by FastAPI that runs in the cloud. We have chosen to use AWS Lambda as the cloud machine to run our functions and use AWS S3 as our data store.

CheckPhishing is created by training machine learning models to find phishing websites. The authors tested seven models: Logistic Regression, K- Nearest Neighbor, Support Vector Machine, Decision Tree, Random Forest, AdaBoost, and XGBoost. And we find that XGBoost is the best model that can detect phishing websites up to 96%.

Data source and features that we use in this project - https://data.mendeley.com/datasets/c2gw7fy2j4/3
