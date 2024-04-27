---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# 👨🏻‍💻 About Me

Hi, I am **Xiaokun Feng <font face="楷体">(丰效坤)</font>**!
I'm a Ph.D. student at **<a href="http://english.ia.cas.cn/">Institute of Automation, Chinese Academy of Sciences (CASIA)</a>**, supervised by **<a href="https://people.ucas.ac.cn/~huangkaiqi?language=en">Prof. Kaiqi Huang</a>** (IAPR Fellow). I'm also a member of **<a href="http://viig.aitestunion.com/">Visual Intelligence Interest Group (VIIG)</a>**.

Currently, I r . If you are interested in my research or would like to collaborate, please do not hesitate to contact me. 



# 🔥 News
- **2024.04**: 🏆 Obtain **Beijing Outstanding Graduates (<font face="楷体">北京市优秀毕业生</font>)** (only 38 students obtain this honor of SCS, BUPT)!
- **2024.04**: 📣 We will present our work (**Global Instance Tracking**) at **TPAMI2023** during the [**VALSE2024**](http://www.valser.org/2024/#/) poster session (May 2024, Chongqing, China) and extend a warm invitation to colleagues interested in visual object/language tracking, evaluation methodologies, and human-computer interaction to engage in discussions with us (see our [**Poster**](https://xuchen-li.github.io/files/VALSE24Poster-364.pdf) for more information).
- **2024.04**: 📝 One [**paper**](https://xuchen-li.github.io/#DTLLM) has been accepted by **the 3rd CVPR Workshop on Vision Datasets Understanding and DataCV Challenge** as **Oral Presentation** (CVPRW, Workshop in CCF-A Conference, Oral)!
- **2023.12**: 🏆 Obtain **College Scholarship of University of Chinese Academy of Sciences (<font face="楷体">中国科学院大学大学生奖学金</font>)** (only 17 students win this scholarship of CASIA)!
- **2023.12**: 🏆 Obtain **China National Scholarship (<font face="楷体">国家奖学金</font>)** with a rank of **1/455 (0.22%)** (the highest honor for undergraduates in China, awarded to top 1% students of BUPT)!
- **2023.11**: 🏆 Obtain **Beijing Merit Student (<font face="楷体">北京市三好学生</font>)** (only 36 students obtain this honor of BUPT)!
- **2023.09**: 📝 One [**paper**](https://xuchen-li.github.io/#MGIT) has been accepted by **the 37th Conference on Neural Information Processing Systems** (NeurIPS, CCF-A Conference, Poster)!
- **2022.12**: 🏆 Obtain **Huawei AI Education Base Scholarship (<font face="楷体">华为智能基座奖学金</font>)** (only 20 students win this scholarship of BUPT)!
- **2022.12**: 🏆 Obtain **China National Scholarship (<font face="楷体">国家奖学金</font>)** with a rank of **2/430 (0.47%)** (the highest honor for undergraduates in China, awarded to top 1% students of BUPT)!

# 🔬 Research Interests

## Visual Language Tracking (VLT)

- Research on multi-modal tracking, addressing challenges related to integrating visual and linguistic information for improved tracking accuracy.
- Research on VLT extends to tasks involving comprehensive video understanding and encompasses efforts to enhance the algorithms' capability to interpret and contextualize objects in videos based on linguistic input.
- The exploration of human-computer interaction patterns employs Large Language Models (LLMs) in conjunction with visual language tracking as a proxy task, contributing to developing more intuitive and user-friendly interactions.

## Visual Object Tracking (VOT)

- Research on visual object tracking algorithms within diverse scenes, aims to enhance the understanding and performance of single object tracking in various scenarios.
- Research on the robustness and generalization aspects of single object tracking algorithms, investigates the algorithms' ability to adapt across diverse scenarios, ensuring consistent and reliable performance.

# 📖 Educations

<div class='school-box'>
<div><img src='images/BUPT.png' alt="sym" width="80"></div>
<div class='school-box-text' markdown="1">
2020.09 - now, Undergraduate student<br>
Computer Science and Technology, Ranking <b>1/449 (0.22%)</b><br>
School of Computer Science<br>
Beijing University of Posts and Telecommunications, Beijing
</div>
</div>

# 💻 Research Experiences

* **2023.05 - Present**: Participant of interdisciplinary symposia around computer vision (20+ participants from 10+ universities, once a week) at **[Institute of Automation, Chinese Academy of Sciences (CASIA)](http://english.ia.cas.cn/)**,  initiated and organized by **[Dr. Shiyu Hu](https://huuuuusy.github.io/)**.
* **2023.05 - 2024.04**: Member of Artificial Intelligence Elites Class at **[Institute of Automation, Chinese Academy of Sciences (CASIA)](http://english.ia.cas.cn/)**, supervised by **<a href="https://people.ucas.ac.cn/~huangkaiqi?language=en">Prof. Kaiqi Huang</a>** (IAPR Fellow).
* **2023.01 - 2023.05**: Research intern on 3D scene reconstruction at **[Tsinghua University (THU)](https://www.tsinghua.edu.cn/en/)**,  advised by **[Prof. Haoqian Wang](https://scholar.google.com/citations?hl=zh-CN&user=eldgnIYAAAAJ&hl=en)**.

# 📝 Publications 

## ✅ Acceptance

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPRW 2024</div><img src='images/DTLLM-VLT.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<span class='anchor' id='DTLLM'></span>
  
**DTLLM-VLT: Diverse Text Generation for Visual Language Tracking Based on LLM**

**Xuchen Li**, [Xiaokun Feng](https://github.com/XiaokunFeng), [Shiyu Hu](https://huuuuusy.github.io/), [Meiqi Wu](https://wmeiqi.github.io/), Dailing Zhang, Jing Zhang, [Kaiqi Huang](https://people.ucas.ac.cn/~huangkaiqi?language=en)

CVPRW 2024 Oral (Workshop in CCF-A Conference, Oral): **[the 3rd CVPR Workshop on Vision Datasets Understanding and DataCV Challenge](https://sites.google.com/view/vdu-cvpr24/)**<br>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2023</div><img src='images/MGIT.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<span class='anchor' id='MGIT'></span>
  
**A Multi-modal Global Instance Tracking Benchmark (MGIT): Better Locating Target in Complex Spatio-temporal and Causal Relationship**

[Shiyu Hu](https://huuuuusy.github.io/), Dailing Zhang, [Meiqi Wu](https://wmeiqi.github.io/), [Xiaokun Feng](https://github.com/XiaokunFeng), **Xuchen Li**, [Xin Zhao](https://www.xinzhaoai.com/), [Kaiqi Huang](https://people.ucas.ac.cn/~huangkaiqi?language=en)

NeurIPS 2023 (CCF-A Conference, Poster): **[the 37th Conference on Neural Information Processing Systems](https://neurips.cc/Conferences/2023)**<br>
  [[**Paper**](https://xuchen-li.github.io/files/MGIT.pdf)]
  [[**BibTeX**](https://xuchen-li.github.io/files/MGIT.bib)]
  [[**Poster**](https://xuchen-li.github.io/files/MGIT-poster.pdf)]
  [[**Slides**](https://xuchen-li.github.io/files/MGIT-Slides.pdf)]
  [[**Platform**](http://videocube.aitestunion.com/)]
  [[**Toolkit**](https://github.com/huuuuusy/videocube-toolkit)]
  [[**Dataset**](http://videocube.aitestunion.com/downloads)]
</div>
</div>

## ☑️ Ongoing Research

<div class='paper-box'><div class='paper-box-image'><div><div class="badge-review">NeurIPS 2024</div><img src='images/MemVLT.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**Remembering Target More Like Humans: A Robust Visual-Language Tracker with Adaptive Prompts**

[Xiaokun Feng](https://github.com/XiaokunFeng), **Xuchen Li**, [Shiyu Hu](https://huuuuusy.github.io/), Dailing Zhang, [Meiqi Wu](https://wmeiqi.github.io/), [Xiaotang Chen](http://www.crise.ia.ac.cn/teachers_view.aspx?TypeId=141&Id=467&Fid=t26:141:26), [Kaiqi Huang](https://people.ucas.ac.cn/~huangkaiqi?language=en)

NeurIPS 2024 (CCF-A Conference, In Preparation): **[the 38th Conference on Neural Information Processing Systems](https://neurips.cc/Conferences/2024)**<br>
</div>
</div>

# 🎖 Honors and Awards

* **China National Scholarship (<font face="楷体">国家奖学金</font>)**, My Rank: 1/455 (0.22%), at BUPT, by Ministry of Education of China, 2023
* **China National Scholarship (<font face="楷体">国家奖学金</font>)**, My Rank: 2/430 (0.47%), at BUPT, by Ministry of Education of China, 2022
* **Huawei AI Education Base Scholarship (<font face="楷体">华为智能基座奖学金</font>)**, at BUPT, by Ministry of Education of China and Huawei AI Education Base Joint Working Group, 2022
* **Beijing Merit Student (<font face="楷体">北京市三好学生</font>)**, at BUPT, by Beijing Municipal Education Commission, 2023
* **Beijing Outstanding Graduates (<font face="楷体">北京市优秀毕业生</font>)**, at BUPT, by Beijing Municipal Education Commission, 2024
* **College Scholarship of University of Chinese Academy of Sciences (<font face="楷体">中国科学院大学大学生奖学金</font>)**, at CASIA, by University of Chinese Academy of Sciences, 2023
* **China National Encouragement Scholarship**, My Rank: 8/522 (1.53%), at BUPT, by Ministry of Education of China, 2021
* **Haohan Scholarship and Grants**, at BUPT, by Beijing Haohan DATA Technology Co., Ltd, 2021
* **National First Prize**, China Collegiate Computing Contest-Artificial Intelligence Innovation Contest (team leader), 2022
* **Meritorious Winner**, Mathematical Contest in Modeling and Interdisciplinary Contest in Modeling, 2022
* **National Third Prize**, Huawei Information and Communication Technology Competition Nationwide Final (team leader), 2023
* **National Third Prize**, China Robotics and Artificial Intelligence Competition, 2023
* **National Level Project**, College Students' Innovation and Entrepreneurship Training Program (team leader), 2023
* **National Level Project**, College Students' Innovation and Entrepreneurship Training Program, 2023

# 🌟 Maintained Projects

<div class='paper-box'><div class='paper-box-image'><div><div class="badge-project">VideoCube / MGIT Platform</div><img src='images/VideoCube.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**<a href="http://videocube.aitestunion.com/">VideoCube: A Large-scale Multi-dimensional Global Instance Tracking Intelligent Evaluation Platform</a>**<br>
**<a href="http://videocube.aitestunion.com/">MGIT: A Multi-modal Global Instance Tracking Benchmark Based on Hierarchical Semantic Framework</a>**

- Visual Object Tracking / Visual Language Tracking / Long Video Understanding and Reasoning / Intelligent Evaluation Technology
- As of Feb. 2024, the platform has received 315k+ page views, 1k+ downloads, 400+ trackers from 130+ countries and regions worldwide.
- VideoCube / MGIT is the supporting platform for research accepted by IEEE TPAMI 2023 and NeurIPS 2023.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge-project">SOTVerse Platform</div><img src='images/SOTVerse.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**<a href="http://metaverse.aitestunion.com/">SOTVerse: A User-defined Single Object Tracking Task Space</a>**

- Visual Object Tracking / Dynamic Open Environment Construction / Visual Evaluation Technique
- As of Feb. 2024, the platform has received 106k+ page views from 100+ countries and regions worldwide.
- SOTVerse is the supporting platform for research accepted by IJCV 2023.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge-project">GOT-10k Platform</div><img src='images/GOT-10k.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**<a href="http://got-10k.aitestunion.com/">GOT-10k: A Large High-diversity Benchmark and Evaluation Platform for Single Object Tracking</a>**

- Visual Object Tracking / Evaluation Technology / Large High-diversity Benchmark
- As of Feb. 2024, the platform has received 3.24M+ page views, 6k+ downloads, 18k+ trackers from 160+ countries and regions worldwide.
- GOT-10k is the supporting platform for research accepted by IEEE TPAMI 2021.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge-project">VIIG Platform</div><img src='images/VIIG.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**<a href="http://viig.aitestunion.com/">VIIG: Visual Intelligence Interest Group</a>**

- Communication / Collaboration / Cooperation
- Welcome colleagues interested in visual object tracking, visual language tracking, evaluation methodologies, and human-computer interaction to engage in discussions with us.
</div>
</div>

# 🤝 Collaborators

> I am honored to collaborate with these outstanding researchers. We engage in close discussions concerning various fields such as computer vision, AI4Science, and human-computer interaction. If you are also interested in these areas, please feel free to contact me.

- [**Shiyu Hu**](https://huuuuusy.github.io/), Ph.D. at the [**Institute of Automation, Chinese Academy of Sciences (CASIA)**](http://english.ia.cas.cn/) and [**University of Chinese Academy of Sciences (UCAS)**](https://english.ucas.ac.cn/), focusing on visual object tracking, visual language tracking, benchmark construction, intelligent evaluation technique, and AI4Science.
- [**Meiqi Wu**](https://wmeiqi.github.io/), Ph.D. student at the [**University of Chinese Academy of Sciences (UCAS)**](https://english.ucas.ac.cn/), focusing on computer vision, intelligent evaluation technique, and human-computer interaction.
- **Yiping Ma**, Ph.D. student at the [**East China Normal University (ECNU)**](https://english.ecnu.edu.cn/), focusing on intelligent education technique and human-computer interaction.
- **Yaxuan Kang**, design researcher, research assistant and interaction designer at the [**Institute of Automation, Chinese Academy of Sciences (CASIA)**](http://english.ia.cas.cn/), focusing on human-computer interaction.
- **Jing Zhang**, research assistant at the [**Institute of Automation, Chinese Academy of Sciences (CASIA)**](http://english.ia.cas.cn/), focusing on computer vision and AI4Science.
- [**Xiaokun Feng**](https://github.com/XiaokunFeng), Ph.D. student at the [**Institute of Automation, Chinese Academy of Sciences (CASIA)**](http://english.ia.cas.cn/), focusing on visual object tracking, visual language tracking, and AI4Science.
- **Dailing Zhang**, Ph.D. student at the [**Institute of Automation, Chinese Academy of Sciences (CASIA)**](http://english.ia.cas.cn/), focusing on visual object tracking, visual language tracking, and AI4Science.
- [**Xuzhao Li**](https://xuzhaoli.github.io/), B.E. student and incoming M.S. student at [**Beijing Institute of Technology (BIT)**](https://english.bit.edu.cn/), focusing on multi-agent path planning and trajectory prediction.

My homepage visitors recorded from February, 2024. Thanks for attention.
<body>
<script type="text/javascript" src="//rf.revolvermaps.com/0/0/6.js?i=51n9jlj53ia&amp;m=7&amp;c=e63100&amp;cr1=ffffff&amp;f=arial&amp;l=0&amp;bv=90&amp;lx=-420&amp;ly=420&amp;hi=20&amp;he=7&amp;hc=a8ddff&amp;rs=80" async="async"></script>
</body>
