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
I'm a Ph.D. student at **<a href="http://english.ia.cas.cn/">Institute of Automation, Chinese Academy of Sciences (CASIA)</a>**, supervised by **<a href="https://people.ucas.ac.cn/~huangkaiqi?language=en">Prof. Kaiqi Huang</a>** (IAPR Fellow). Additionally, I'm a member of **<a href="http://viig.aitestunion.com/">Visual Intelligence Interest Group (VIIG)</a>**.

Currently, my research focuses on video multimodal tracking and video generation tasks. If you are intrigued by my work or wish to collaborate, feel free to reach out to me.



# 🔥 News
- **2025.09**: 📝One co-first author paper ([CoS](https://arxiv.org/pdf/2509.19003)) has been accepted by the 39th Conference on Neural Information Processing Systems (**NeurIPS**, CCF-A Conference, Poster).
- **2025.08**: 📣Our new benchmark ([NarrLV](https://arxiv.org/pdf/2507.11245?)) is now available! It is a novel benchmark to evaluate long video generation models from the perspective of narrative expressiveness.
- **2025.06**: 📝Two papers ([ATCTrack](https://arxiv.org/pdf/2507.19875?), [VMBench](https://arxiv.org/pdf/2503.10076)) have been accepted by International Conference on Computer Vision (**ICCV**, CCF-A conference). ATCTrack was recognized as a **<font color=DarkRed>Highlight</font>** paper.
- **2025.05**: 📝One paper ([CSTrack](https://arxiv.org/pdf/2505.19434?)) has been accepted by International Conference on Machine Learning (**ICML**, CCF-A conference). 
- **2025.01**: 📝One paper ([CTVLT](https://arxiv.org/pdf/2412.19648)) has been accepted by IEEE International Conference on Acoustics, Speech, and Signal Processing (**ICASSP**, CCF-B conference). 
- **2024.09**: 📝Two papers ([MemVLT](https://huuuuusy.github.io/#MemVLT) and [CPDTrack](https://huuuuusy.github.io/#CPDTrack)) have been accepted by Conference on Neural Information Processing Systems (**NeurIPS**, CCF-A Conference).
- **2024.04**: 📣 We will present our work (**Global Instance Tracking**) at **TPAMI2023** during the [**VALSE2024**](http://www.valser.org/2024/#/) poster session (May 2024, Chongqing, China) and extend a warm invitation to colleagues interested in visual object/language tracking, evaluation methodologies, and human-computer interaction to engage in discussions with us (see our [**Poster**](https://xuchen-li.github.io/files/VALSE24Poster-364.pdf) for more information).
- **2024.04**: 📝 One [**paper**](https://xuchen-li.github.io/#DTLLM) has been accepted by the 3rd CVPR Workshop on Vision Datasets Understanding and DataCV Challenge as **Oral Presentation** (**CVPRW**, Workshop in CCF-A Conference, Oral)!
- **2023.09**: 📝 One [**paper**](https://xuchen-li.github.io/#MGIT) has been accepted by the 37th Conference on Neural Information Processing Systems (**NeurIPS**, CCF-A Conference, Poster)!
- **2023.08** : 📝One paper ([HIST](https://huuuuusy.github.io/files/PRCV23.pdf))  has been accepted by Chinese Conference on Pattern Recognition and Computer Vision (**PRCV**, CCF-C conference).
- **2022.04**: 🏆 Obtain **Beijing Outstanding Graduates (<font face="楷体">北京市优秀毕业生</font>)** !
- **2021.12**: 🏆 Obtain **China National Scholarship (<font face="楷体">国家奖学金</font>)** (the highest honor for undergraduates in China, awarded to top 1% students of BIT)!
- **2020.12**: 🏆 Obtain **China National Scholarship (<font face="楷体">国家奖学金</font>)** (the highest honor for undergraduates in China, awarded to top 1% students of BIT)!

# 🔬 Research Interests

## Video multimodal tracking
  
- Investigating multi-modal tracking to address challenges related to integrating visual and linguistic information, thereby improving tracking accuracy.
- Exploring the extension of VLT research to tasks involving comprehensive video understanding, aiming to interpret and contextualize objects in videos based on linguistic input.
- Utilizing Large Language Models (LLMs) in conjunction with visual language tracking to explore human-computer interaction patterns, contributing to the development of more intuitive and user-friendly interactions.

## Video generation

- Researching visual object tracking algorithms across diverse scenes to enhance single object tracking performance in various scenarios.
- Exploring the robustness and generalization aspects of single object tracking algorithms to ensure consistent and reliable performance across diverse scenarios.

# 📖 Educations

<div class='school-box'>
<div><img src='images/bit_1.png' alt="sym" width="80"></div>
<div class='school-box-text' markdown="1">
2018.09 - 2022.06, undergraduate study, Ranking <b> 5/381 (1.3%)</b><br>
School of Information and Electronics<br>
Beijing Institute of Technology, Beijing
</div>
</div>

# 💻 Research Experiences

* **2022.09 - Present**: Pursuing a Ph.D. degree at **[Institute of Automation, Chinese Academy of Sciences (CASIA)](http://english.ia.cas.cn/)**, conducting research on single-object tracking in **<a href="http://viig.aitestunion.com/">Visual Intelligence Interest Group (VIIG)</a>**, initiated and organized by **[Dr. Shiyu Hu](https://huuuuusy.github.io/)**.


# 📝 Publications 

## ☑️ Ongoing Research

<div class='paper-box'><div class='paper-box-image'><div><div class="badge-review">NeurIPS 2024</div><img src='images/narrlv.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**NarrLV: Towards a Comprehensive Narrative-Centric Evaluation for Long Video Generation**

**[Xiaokun Feng](https://github.com/XiaokunFeng)**, XHaiming Yu, [Meiqi Wu](https://wmeiqi.github.io/), [Shiyu Hu](https://huuuuusy.github.io/), et.al

</div>
</div>

## ✅ Acceptance

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPRW 2024</div><img src='images/DTLLM-VLT.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<span class='anchor' id='DTLLM'></span>
  
**DTLLM-VLT: Diverse Text Generation for Visual Language Tracking Based on LLM**

Xuchen Li, **[Xiaokun Feng](https://github.com/XiaokunFeng)**, [Shiyu Hu](https://huuuuusy.github.io/), [Meiqi Wu](https://wmeiqi.github.io/), Dailing Zhang, Jing Zhang, [Kaiqi Huang](https://people.ucas.ac.cn/~huangkaiqi?language=en)

CVPRW 2024 Oral (Workshop in CCF-A Conference, Oral): **[the 3rd CVPR Workshop on Vision Datasets Understanding and DataCV Challenge](https://sites.google.com/view/vdu-cvpr24/)**<br>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2023</div><img src='images/MGIT.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<span class='anchor' id='MGIT'></span>
  
**A Multi-modal Global Instance Tracking Benchmark (MGIT): Better Locating Target in Complex Spatio-temporal and Causal Relationship**

[Shiyu Hu](https://huuuuusy.github.io/), Dailing Zhang, [Meiqi Wu](https://wmeiqi.github.io/), **[Xiaokun Feng](https://github.com/XiaokunFeng)**, Xuchen Li, [Xin Zhao](https://www.xinzhaoai.com/), [Kaiqi Huang](https://people.ucas.ac.cn/~huangkaiqi?language=en)

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


# 🎖 Honors and Awards

* **China National Scholarship (<font face="楷体">国家奖学金</font>)**, at BIT, by Ministry of Education of China, 2021
* **China National Scholarship (<font face="楷体">国家奖学金</font>)**, at BIT, by Ministry of Education of China, 2020
* **Beijing Outstanding Graduates (<font face="楷体">北京市优秀毕业生</font>)**, at BIT, by Beijing Municipal Education Commission, 2022
* **China National Encouragement Scholarship**, at BIT, by Ministry of Education of China, 2019


# 🤝 Collaborators

> I am honored to collaborate with these outstanding researchers. We engage in close discussions concerning various fields such as computer vision, AI4Science, and human-computer interaction. If you are also interested in these areas, please feel free to contact me.

- [**Shiyu Hu**](https://huuuuusy.github.io/), Ph.D. at the [**Institute of Automation, Chinese Academy of Sciences (CASIA)**](http://english.ia.cas.cn/) and [**University of Chinese Academy of Sciences (UCAS)**](https://english.ucas.ac.cn/), focusing on visual object tracking, visual language tracking, benchmark construction, intelligent evaluation technique, and AI4Science.
- [**Meiqi Wu**](https://wmeiqi.github.io/), Ph.D. student at the [**University of Chinese Academy of Sciences (UCAS)**](https://english.ucas.ac.cn/), focusing on computer vision, intelligent evaluation technique, and human-computer interaction.
- [**Xuchen Li**](https://xuchen-li.github.io/), incoming Ph.D. student at the [**Institute of Automation, Chinese Academy of Sciences (CASIA)**](http://english.ia.cas.cn/), focusing on visual object tracking, visual language tracking, and AI4Science.
- **Dailing Zhang**, Ph.D. student at the [**Institute of Automation, Chinese Academy of Sciences (CASIA)**](http://english.ia.cas.cn/), focusing on visual object tracking, visual language tracking, and AI4Science.


My homepage visitors recorded from April, 2024. Thanks for attention.
<body>
<script type="text/javascript" src="//rf.revolvermaps.com/0/0/6.js?i=5kvfizgqt9s&amp;m=7&amp;c=e63100&amp;cr1=ffffff&amp;f=arial&amp;l=0&amp;bv=90&amp;lx=-420&amp;ly=420&amp;hi=20&amp;he=7&amp;hc=a8ddff&amp;rs=80" async="async"></script>
</body>
