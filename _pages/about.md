---
permalink: /
title: "LI Xinran"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

## 👋 Welcome!

I am **LI Xinran (李欣然)**, a dual-degree **M.S. student** at **Waseda University** (Japan) and **Dalian University of Technology** (China), specializing in **Natural Language Processing (NLP)**.  
My research focuses on **Emotion Recognition in Conversation (ERC)** and **Aspect-Based Sentiment Analysis (ABSA)**, leveraging large language model techniques and designing **Curriculum Learning frameworks** for downstream NLP tasks.


> I am currently **actively applying for Ph.D. positions** — please feel free to contact me!

---

## 🎓 Education

- **Waseda University**, Graduate School of Information, Production and Systems — *Dual M.S. Degree (Expected Mar. 2027)*  
  Research on **Aspect-Based Sentiment Analysis (ABSA)** with **Curriculum Learning** and **Large Language Models**.  
  *Kitakyushu Academic Research City Scholarship Recipient.*

- **Dalian University of Technology**, School of Software — *Dual M.S. Degree (Expected 2027)*  
  Research on **Emotion Recognition in Conversation (ERC)** using **Graph Neural Networks** and **Improved Curriculum Learning**.  
  *Outstanding Master’s Student Award (Top 20/300).*

- **Dalian University of Technology**, School of Software — *B.Eng. in Software Engineering (2020–2024)*  
  Undergraduate research in **NLP** and **medical imaging**.  
  **Average Score: 88**, **GPA: 3.8/4.0**  
  *Direct Admission to Master’s Program (Top 17%).*

---

## 🧠 Research Interests

- Natural Language Processing (NLP)  
- Emotion Recognition in Conversation (ERC)  
- Aspect-Based Sentiment Analysis (ABSA)  
- Large Language Models (LLMs)   
- Curriculum Learning (CL)

---
## 💼 Professional Experience

**Bilibili (Shanghai, China)**  
*Algorithm Intern, Game AI Application Technical Group*  
Mar. 2026 – Jul. 2026  
- Built a Japanese-to-Chinese/multilingual translation pipeline for a well-known Japanese mobile game, leveraging a RAG framework with integrated terminology and memory databases.
- Developed a multi-stage translation quality estimation (QE) system featuring rule-based validation, lightweight classification, and deep LLM review to enable an automated feedback loop for quality optimization.
- Engineered a domain-specific professional translation model by fine-tuning Qwen3-8B using SFT and GRPO strategies, complemented by a customized reward mechanism.

---

## 🧩 Publications

**1. Do LLMs Feel? Teaching Emotion Recognition with Prompts, Retrieval, and Curriculum Learning**  
*AAAI 2026 (CORE A\*, CCF A)* — **First Author**  
Authors: **Xinran Li**, Yu Liu, Jiaqi Qiao, Xiujuan Xu  
> We propose **PRC-Emo**, a new ERC training framework that integrates **Prompt engineering**, **demo Retrieval**, and **Curriculum learning** to investigate whether LLMs can effectively perceive emotions in conversations. PRC-Emo introduces emotion-sensitive prompt templates capturing both explicit and implicit emotional cues, constructs the first **ERC-specific demonstration retrieval repository**, and incorporates curriculum strategies into **LoRA fine-tuning** via weighted emotional shifts. Experiments on **IEMOCAP** and **MELD** achieve **new SOTA results**, demonstrating the strong generalizability of our approach.  
[Paper (DOI:10.1609/aaai.v40i38.40446)](https://ojs.aaai.org/index.php/AAAI/article/view/40446) | [Code (GitHub)](https://github.com/LiXinran6/PRC-Emo)

**2. TCDA: Thread-Constrained Discourse-Aware Modeling for Conversational Sentiment Quadruple Analysis**  
*IJCAI 2026 (CORE A\*, CCF B)* — **First Author**  
Authors: **Xinran Li**, Xinze Che, Yifan Lyu, Zhiqi Huang, Xiujuan Xu 
> We propose **TCDA**, a novel framework for Conversational Aspect-based Sentiment Quadruple Analysis (DiaASQ) that addresses structural noise and temporal sequence challenges in multi-turn dialogues. The framework introduces Thread-Constrained Directed Acyclic Graph (TC-DAG) to filter cross-thread noise while maintaining global connectivity, and Discourse-Aware Rotary Position Embedding (D-RoPE) to align multi-layer semantics and alleviate the Distance Dilution problem. Experimental results on two benchmark datasets demonstrate that our approach achieves new state-of-the-art performance.  
[Paper (arxiv)](https://arxiv.org/abs/2605.01717) | [Code (GitHub)](https://github.com/LiXinran6/TCDA)

**3. Long-Short Distance Graph Neural Networks and Improved Curriculum Learning for Emotion Recognition in Conversation**  
*ECAI 2025 (CORE A, CCF B)* — **First Author**  
Authors: **Xinran Li**, Xiujuan Xu, Jiaqi Qiao
> Developed a novel **LSDGNN + ICL** framework combining long- and short-distance GNNs for ERC tasks, improving emotion classification on **IEMOCAP** and **MELD** datasets.  
[Paper (DOI:10.3233/FAIA251292)](https://ebooks.iospress.nl/doi/10.3233/FAIA251292) | [Code (GitHub)](https://github.com/LiXinran6/LSDGNN_ICL)

**4. CheX-DS: Improving Chest X-ray Image Classification with Ensemble Learning Based on DenseNet and Swin Transformer**  
*IEEE BIBM 2024 (CCF B)* — **First Author**  
Authors: **Xinran Li**, Xiujuan Xu, Yu Liu, Xiaowei Zhao 
> Designed **CheX-DS**, combining DenseNet and Swin Transformer for long-tail medical image classification, achieving **83.76% AUC** on NIH ChestX-ray14 dataset.  
[Paper (IEEE BIBM 2024)](https://ieeexplore.ieee.org/abstract/document/10822262)

**5. Extensible Multi-Granularity Fusion Network and Transferable Curriculum Learning for Aspect-based Sentiment Analysis**  
*Under Review* — **First Author**  
Authors: **Xinran Li**, Xiaowei Zhao, Yubo Zhu, Zhiheng Zhang, Zhiqi Huang, Hongkun Song, Jinglu Hu, Xinze Che, Yifan Lyu, Yong Zhou, Xiujuan Xu 
> Proposed an Extensible Multi-Granularity Fusion (EMGF) network that unifies dependency syntax, constituency syntax, attentional semantics, and external knowledge graph information. It achieves efficient feature collaborative modeling through multi-anchor triplet learning and orthogonal projection, incorporating a transferable curriculum learning strategy to enhance model generalization.  
[Paper (arXiv:2402.07787)](https://arxiv.org/abs/2402.07787)

**6. A Unified Framework for Emotion Recognition and Sentiment Analysis via Expert-Guided Multimodal Fusion with Large Language Models**  
*Under Review* — **Third Author (Second among students)**  
Authors: Jiaqi Qiao, Xiujuan Xu, **Xinran Li**, Yu Liu  
> Proposed an **Expert-Guided Multimodal Fusion (EGMF)** framework integrating multimodal cues via LLMs and LoRA fine-tuning, achieving superior results on **MELD**, **CHERMA**, **MOSEI**, and **SIMS-V2** datasets.  
[Paper (arXiv:2601.07565)](https://arxiv.org/abs/2601.07565)

---

## 🏅 Honors & Awards

- **Kitakyushu Academic Research City Scholarship**, Waseda University (2025)  
- **Outstanding Master’s Student Award**, DUT (2025)  
- **Direct Admission to Master’s Program**, DUT (2024)  
- **Second-Class Scholarship for Academic Excellence**, DUT (2021, 2022)  

---

## 🛠️ Skills

**Programming & Tools:** Python, Java, LaTeX, Git, Jupyter Notebook, PyTorch, HuggingFace Transformers  
**Domains:** Graph Neural Networks, Transformers, Curriculum Learning, Large Language Models
**Standardized Tests:** TOEFL 95, GRE 322

---

📫 **Contact:**  

**Email:**  
- [lixinran@ruri.waseda.jp](mailto:lixinran@ruri.waseda.jp)  
- [963707605@mail.dlut.edu.cn](mailto:963707605@mail.dlut.edu.cn)  
- [963707605a@gmail.com](mailto:963707605a@gmail.com)  

I am currently **actively applying for Ph.D. positions** — please feel free to contact me if you are interested in research collaboration or supervision opportunities!
