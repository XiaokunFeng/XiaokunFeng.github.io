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
- **2024.09**: 📝Two papers ([MemVLT](https://proceedings.neurips.cc/paper_files/paper/2024/file/1af3e0bf5905e33789979f666c31192d-Paper-Conference.pdf) and [CPDTrack](https://proceedings.neurips.cc/paper_files/paper/2024/file/050f8591be3874b52fdac4e1060eeb29-Paper-Conference.pdf)) have been accepted by Conference on Neural Information Processing Systems (**NeurIPS**, CCF-A Conference).
- **2024.05**: 📝One paper ([LKRobust](https://arxiv.org/pdf/2407.08972)) has been accepted by International Conference on Machine Learning (**ICML**, CCF-A conference). 
- **2024.04**: 📣 We will present our work (**Global Instance Tracking**) at **TPAMI2023** during the [**VALSE2024**](http://www.valser.org/2024/#/) poster session (May 2024, Chongqing, China) and extend a warm invitation to colleagues interested in visual object/language tracking, evaluation methodologies, and human-computer interaction to engage in discussions with us (see our [**Poster**](https://xuchen-li.github.io/files/VALSE24Poster-364.pdf) for more information).
- **2024.04**: 📝 One [**paper**](https://xuchen-li.github.io/#DTLLM) has been accepted by the 3rd CVPR Workshop on Vision Datasets Understanding and DataCV Challenge as **Oral Presentation** (**CVPRW**, Workshop in CCF-A Conference, Oral)!
- **2023.09**: 📝 One [**paper**](https://xuchen-li.github.io/#MGIT) has been accepted by the 37th Conference on Neural Information Processing Systems (**NeurIPS**, CCF-A Conference, Poster)!
- **2023.08** : 📝One paper ([HIST](https://huuuuusy.github.io/files/PRCV23.pdf))  has been accepted by Chinese Conference on Pattern Recognition and Computer Vision (**PRCV**, CCF-C conference).
- **2022.04**: 🏆 Obtain **Beijing Outstanding Graduates (<font face="楷体">北京市优秀毕业生</font>)** !
- **2021.12**: 🏆 Obtain **China National Scholarship (<font face="楷体">国家奖学金</font>)** (the highest honor for undergraduates in China, awarded to top 1% students of BIT)!
- **2020.12**: 🏆 Obtain **China National Scholarship (<font face="楷体">国家奖学金</font>)** (the highest honor for undergraduates in China, awarded to top 1% students of BIT)!

# 🔬 Research Interests

## Video multimodal tracking
  
- Investigating multimodal tracking to address challenges in integrating visual information with auxiliary modalities (e.g., language, heat maps, infrared images, and depth maps), thereby enhancing tracking accuracy.
- Leveraging Large Language Models (LLMs) in conjunction with visual-language tracking to explore human–computer interaction patterns, contributing to the development of more intuitive and user-friendly interaction systems.
- Following the paradigm of unified foundation models by jointly utilizing datasets from multiple modalities to train a single model capable of handling all multimodal tracking tasks.

## Video generation

- Focusing on long video generation, aiming to improve existing evaluation benchmarks and advance model design in this field.
- Exploring the applications of foundation video generation models in various downstream tasks.

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

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Under Review</div><img src='images/narrlv.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<span class='anchor' id='narrlv'></span>
  
**NarrLV: Towards a Comprehensive Narrative-Centric Evaluation for Long Video Generation**

***<font color=DarkRed>XiaoKun Feng</font>***, Haiming Yu, [Meiqi Wu](https://wmeiqi.github.io/), [Shiyu Hu](https://huuuuusy.github.io/), et.al

Under Review
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Under Review</div><img src='images/s2guidance.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<span class='anchor' id='s2guidance'></span>
  
**$S^2$-Guidance: Stochastic Self Guidance for Training-Free Enhancement of Diffusion Models**

Chubin Chen, Jiashu Zhu, ***<font color=DarkRed>XiaoKun Feng</font>***, et.al

Under Review
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Under Review</div><img src='images/omini_effect.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<span class='anchor' id='omini_effect'></span>
  
**Omni-Effects: Unified and Spatially-Controllable Visual Effects Generation**

Fangyuan Mao, Aiming Hao, Jintao Chen, Dongxia Liu, ***<font color=DarkRed>XiaoKun Feng</font>***, et.al

Under Review
</div>
</div>



## ✅ Acceptance

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2025</div><img src='images/cos.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<span class='anchor' id='cos'></span>

**Unveiling Chain of Step Reasoning for Vision-Language Models with Fine-grained Reward**<br>
Honghao Chen*, Xingzhou Lou*, ***<font color=DarkRed>XiaoKun Feng</font>***\*, et.al <br>
*NeurIPS 2025 (CCF-A Conference)*<br>
📌 Visual Language Tracking 📌 Multimodal Learning 📌 Adaptive Prompts<br>
[📃 Paper](https://arxiv.org/abs/2507.19875)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV 2025</div><img src='images/atctrack.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<span class='anchor' id='atctrack'></span>

**ATCTrack: Aligning Target-Context Cues with Dynamic Target States for Robust Vision-Language Tracking**<br>
***<font color=DarkRed>XiaoKun Feng</font>***\*, [Shiyu, Hu\*](https://huuuuusy.github.io/), [Xuchen, Li](https://github.com/Xuchen-Li), [DaiLing, Zhang](https://scholar.google.com.hk/citations?user=ApH4wOcAAAAJ), et.al <br>
*ICCV 2025 (CCF-A Conference, **<font color=DarkRed>Highlight</font>**)*<br>
📌 Visual Language Tracking 📌 Multimodal Learning 📌 Adaptive Prompts<br>
[📃 Paper](https://arxiv.org/abs/2507.19875)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV 2025</div><img src='images/vmbench.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<span class='anchor' id='vmbench'></span>

**VMBench: A Benchmark for Perception-Aligned Video Motion Generation**<br>
***Xinran Ling, Chen Zhu, Meiqi Wu, Hangyu Li, <font color=DarkRed>XiaoKun Feng</font>***\*, et.al <br>
*ICCV 2025 (CCF-A Conference)*<br>
📌 Visual Language Tracking 📌 Multimodal Learning 📌 Adaptive Prompts<br>
[📃 Paper](https://arxiv.org/pdf/2503.10076)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2025</div><img src='images/cstrack.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<span class='anchor' id='cstrack'></span>

**CSTrack: Enhancing RGB-X Tracking via Compact Spatiotemporal Features**<br>
***<font color=DarkRed>XiaoKun Feng</font>***\*, [DaiLing, Zhang](https://scholar.google.com.hk/citations?user=ApH4wOcAAAAJ), [Shiyu, Hu\*](https://huuuuusy.github.io/), et.al <br>
*ICML 2025 (CCF-A Conference)*<br>
📌 Visual Language Tracking 📌 Multimodal Learning 📌 Adaptive Prompts<br>
[📃 Paper](https://arxiv.org/abs/2507.19875)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICASSP 2025</div><img src='images/ctvlt.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<span class='anchor' id='ctvlt'></span>

**Enhancing Vision-Language Tracking by Effectively Converting Textual Cues into Visual Cues**<br>
***<font color=DarkRed>XiaoKun Feng</font>***\*, [DaiLing, Zhang](https://scholar.google.com.hk/citations?user=ApH4wOcAAAAJ), [Shiyu, Hu\*](https://huuuuusy.github.io/), et.al <br>
*ICASSP 2025 (CCF-B Conference)*<br>
📌 Visual Language Tracking 📌 Multimodal Learning 📌 Adaptive Prompts<br>
[📃 Paper](https://arxiv.org/pdf/2412.19648)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2024</div><img src='images/memvlt.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<span class='anchor' id='memvlt'></span>

**MemVLT: Vision-language tracking with adaptive memory-based prompts**<br>
***<font color=DarkRed>XiaoKun Feng</font>***\*, [Xuchen Li](https://github.com/Xuchen-Li), [Shiyu, Hu\*](https://huuuuusy.github.io/), et.al <br>
*NeurIPS 2024 (CCF-A Conference)*<br>
📌 Visual Language Tracking 📌 Multimodal Learning 📌 Adaptive Prompts<br>
[📃 Paper](https://arxiv.org/abs/2507.19875)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2024</div><img src='images/cpdtrack.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<span class='anchor' id='cpdtrack'></span>

**Beyond accuracy: Tracking more like human via visual search**<br>
[DaiLing, Zhang](https://scholar.google.com.hk/citations?user=ApH4wOcAAAAJ), [Shiyu, Hu\*](https://huuuuusy.github.io/), ***<font color=DarkRed>XiaoKun Feng</font>***\*, et.al <br>
*NeurIPS 2024 (CCF-A Conference)*<br>
📌 Visual Language Tracking 📌 Multimodal Learning 📌 Adaptive Prompts<br>
[📃 Paper](https://proceedings.neurips.cc/paper_files/paper/2024/file/050f8591be3874b52fdac4e1060eeb29-Paper-Conference.pdf)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2024</div><img src='images/lkrobust.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

<span class='anchor' id='lkrobust'></span>

**Revealing the Dark Secrets of Extremely Large Kernel ConvNets on Robustness**<br>
Honghao Chen, Yurong Zhang, ***<font color=DarkRed>XiaoKun Feng</font>***\*, et.al <br>
*ICML 2024 (CCF-A Conference)*<br>
📌 Visual Language Tracking 📌 Multimodal Learning 📌 Adaptive Prompts<br>
[📃 Paper](https://arxiv.org/pdf/2407.08972)
</div>
</div>



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

[Shiyu Hu](https://huuuuusy.github.io/), Dailing Zhang, [Meiqi Wu](https://wmeiqi.github.io/), **[Xiaokun Feng](https://github.com/XiaokunFeng)**, et.al

NeurIPS 2023 (CCF-A Conference)**<br>
  [[**Paper**](https://xuchen-li.github.io/files/MGIT.pdf)]
  [[**Slides**](https://xuchen-li.github.io/files/MGIT-Slides.pdf)]
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
