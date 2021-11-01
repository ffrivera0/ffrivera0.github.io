(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{338:function(e,a,t){},372:function(e,a,t){"use strict";t(338)},393:function(e,a,t){"use strict";t.r(a);t(372);var o=t(45),r=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"work"}},[e._v("Work")]),e._v(" "),t("p",[e._v("Here are some works of mine 📚")]),e._v(" "),t("h2",{attrs:{id:"publications"}},[e._v("Publications")]),e._v(" "),t("ProjectCard",[t("p",[t("strong",[e._v("Digging Into Self-Supervised Learning of Feature Descriptors (Under Review)")])]),e._v(" "),t("p",[t("em",[e._v("Iaroslav Melekhov, Zakaria Laskar, Xiaotian Li, "),t("strong",[e._v("Shuzhe Wang")]),e._v(", Juho Kannala")])]),e._v(" "),t("p",[e._v("Fully-supervised CNN-based approaches for learning local image descriptors have shown remarkable results in a wide range of geometric tasks. However, most of them require per-pixel ground-truth keypoint correspondence data which is difficult to acquire at scale. To address this challenge, recent weakly- and self-supervised methods can learn feature descriptors from relative camera poses or using only synthetic rigid transformations such as homographies. In this work, we focus on understanding the limitations of existing self-supervised approaches and propose a set of improvements that combined lead to powerful feature descriptors. We show that increasing the search space from in-pair to in-batch for hard negative mining brings consistent improvement. To enhance the discriminativeness of feature descriptors, we propose a coarse-to-fine method for mining local hard negatives from a wider search space by using global visual image descriptors. We demonstrate that a combination of synthetic homography transformation, color augmentation, and photorealistic image stylization produces useful representations that are viewpoint and illumination invariant. The feature descriptors learned by the proposed approach perform competitively and surpass their fully- and weakly-supervised counterparts on various geometric benchmarks such as image-based localization, sparse feature matching, and image retrieval.")]),e._v(" "),t("p",[e._v("["),t("a",{attrs:{href:""}},[e._v("PDF")]),e._v("] ["),t("a",{attrs:{href:"https://arxiv.org/abs/2110.04773",target:"_blank",rel:"noopener noreferrer"}},[e._v("arXiv"),t("OutboundLink")],1),e._v("] ["),t("a",{attrs:{href:""}},[e._v("Code")]),e._v("] ["),t("a",{attrs:{href:""}},[e._v("BibTeX")]),e._v("]")])]),e._v(" "),t("ProjectCard",[t("p",[t("strong",[e._v("Continual Learning for Image-Based Camera Localization (ICCV 2021)")])]),e._v(" "),t("p",[t("strong",[e._v("Shuzhe Wang")]),e._v(" "),t("em",[e._v(", Zakaria Laskar, Iaroslav Melekhov, Xiaotian Li, Juho Kannala")])]),e._v(" "),t("p",[e._v("For several emerging technologies such as augmented reality, autonomous driving and robotics, visual localization is a critical component. Directly regressing camera pose/3D scene coordinates from the input image using deep neural networks has shown great potential. However, such methods assume a stationary data distribution with all scenes simultaneously available during training. In this paper, we approach the problem of visual localization in a continual learning setup -- whereby the model is trained on scenes in an incremental manner. Our results show that similar to the classification domain, non-stationary data induces catastrophic forgetting in deep networks for visual localization. To address this issue, a strong baseline based on storing and replaying images from a fixed buffer is proposed. Furthermore, we propose a new sampling method based on coverage score (Buff-CS) that adapts the existing sampling strategies in the buffering process to the problem of visual localization. Results demonstrate consistent improvements over standard buffering methods on two challenging datasets -- 7Scenes, 12Scenes, and also 19Scenes by combining the former scenes.")]),e._v(" "),t("p",[e._v("["),t("a",{attrs:{href:"https://openaccess.thecvf.com/content/ICCV2021/papers/Wang_Continual_Learning_for_Image-Based_Camera_Localization_ICCV_2021_paper.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("PDF"),t("OutboundLink")],1),e._v("] ["),t("a",{attrs:{href:"https://arxiv.org/abs/2108.09112?context=cs",target:"_blank",rel:"noopener noreferrer"}},[e._v("arXiv"),t("OutboundLink")],1),e._v("] ["),t("a",{attrs:{href:"https://github.com/AaltoVision/CL_HSCNet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Code"),t("OutboundLink")],1),e._v("] ["),t("a",{attrs:{href:"https://scholar.googleusercontent.com/scholar.bib?q=info:0eZeDLRtpiIJ:scholar.google.com/&output=citation&scisdr=CgXXTOCrEKzvtgU-X-4:AAGBfm0AAAAAYYA4R-6UQL1KrcShSX66Cm1XrAUZDaaN&scisig=AAGBfm0AAAAAYYA4R5qS0WfBGqexQN5MhQCgGljBmWJr&scisf=4&ct=citation&cd=-1&hl=zh-CN",target:"_blank",rel:"noopener noreferrer"}},[e._v("BibTeX"),t("OutboundLink")],1),e._v("]")])]),e._v(" "),t("ProjectCard",[t("p",[t("strong",[e._v("Hierarchical Scene Coordinate Classification and Regression for Visual Localization (CVPR2020)")])]),e._v(" "),t("p",[t("em",[e._v("Xiaotian Li, "),t("strong",[e._v("Shuzhe Wang")]),e._v(", Yi Zhao, Jakob Verbeek, Juho Kannala")])]),e._v(" "),t("p",[e._v("Visual localization is critical to many applications in computer vision and robotics. To address single-image RGB localization, state-of-the-art feature-based methods match local descriptors between a query image and a pre-built 3D model. Recently, deep neural networks have been exploited to regress the mapping between raw pixels and 3D coordinates in the scene, and thus the matching is implicitly performed by the forward pass through the network. However, in a large and ambiguous environment, learning such a regression task directly can be difficult for a single network. In this work, we present a new hierarchical scene coordinate network to predict pixel scene coordinates in a coarse-to-fine manner from a single RGB image. The network consists of a series of output layers, each of them conditioned on the previous ones. The final output layer predicts the 3D coordinates and the others produce progressively finer discrete location labels. The proposed method outperforms the baseline regression-only network and allows us to train compact models which scale robustly to large environments. It sets a new state-of-the-art for single-image RGB localization performance on the 7-Scenes, 12-Scenes, Cambridge Landmarks datasets, and three combined scenes. Moreover, for large-scale outdoor localization on the Aachen Day-Night dataset, we present a hybrid approach which outperforms existing scene coordinate regression methods, and reduces significantly the performance gap w.r.t. explicit feature matching methods.")]),e._v(" "),t("p",[e._v("["),t("a",{attrs:{href:"https://openaccess.thecvf.com/content_CVPR_2020/papers/Li_Hierarchical_Scene_Coordinate_Classification_and_Regression_for_Visual_Localization_CVPR_2020_paper.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("PDF"),t("OutboundLink")],1),e._v("] ["),t("a",{attrs:{href:"https://arxiv.org/abs/1909.06216",target:"_blank",rel:"noopener noreferrer"}},[e._v("arXiv"),t("OutboundLink")],1),e._v("] ["),t("a",{attrs:{href:"https://github.com/AaltoVision/hscnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Code"),t("OutboundLink")],1),e._v("] ["),t("a",{attrs:{href:"https://scholar.googleusercontent.com/scholar.bib?q=info:EIIgXVmnYHEJ:scholar.google.com/&output=citation&scisdr=CgXT_HuZEIa99Kxm_N0:AAGBfm0AAAAAYSVg5N1OB_SSVoyNDEDW0B_6poErDXZA&scisig=AAGBfm0AAAAAYSVg5CFuBHOzFJbO7OR9FJcqHkdNItRa&scisf=4&ct=citation&cd=-1&hl=en",target:"_blank",rel:"noopener noreferrer"}},[e._v("BibTeX"),t("OutboundLink")],1),e._v("]")])]),e._v(" "),t("h2",{attrs:{id:"thesis"}},[e._v("Thesis")]),e._v(" "),t("ProjectCard",[t("p",[t("strong",[e._v("Visual-Inertial Odometry Aided Temporal Camera Relocalization (Master's thesis)")])]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Shuzhe Wang")])]),e._v(" , "),t("em",[e._v("Supervisor: Prof. "),t("a",{attrs:{href:"https://users.aalto.fi/~kannalj1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Juho Kannala"),t("OutboundLink")],1),e._v("; Advisor: "),t("a",{attrs:{href:"https://scholar.google.com/citations?user=lht2z_IAAAAJ&hl=en",target:"_blank",rel:"noopener noreferrer"}},[e._v("Li, Xiaotian"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("The goal of Temporal Camera Relocalization is to efficiently and effectively estimate the 6-DoF camera posew.r.tworld coordinate system. It is one of the fundamental problems in Augmented Reality and Autonomous Driving. However, most of the current approaches focus on one-shot image localization with an emphasis on a single RGB image for camera pose estimation, and the accuracy of TCR methods falls behind the SoTA one-shot methods even taking the time dependency into account.")]),e._v(" "),t("p",[e._v("This thesis proposes a novel Temporal Camera Relocalization pipeline, which consists of three parts: global keyframe localization, local odometry, and fusion algorithms. The global localization has a hierarchical structure and can output image poses with high accuracy, the local tracking is provided by the latest visual-inertial odometry platform. Two fusion algorithms, global constraints and particle filter based method, are proposed in this thesis to utilize both global and local information for temporal camera relocalization. Experimental results show that both methods have promising performances with a mean error of less than0.48m/0.68◦in a space of30"),t("em",[e._v("20")]),e._v("2m3. The global constraints method achieves the best result with a mean errorof0.22m/0.2◦, the particle filter based method is robust to global pose estimation and has the ability to maintain the performance when the accuracy of global localization is significantly dropped.")]),e._v(" "),t("p",[e._v("["),t("a",{attrs:{href:""}},[e._v("PDF")]),e._v("] ["),t("a",{attrs:{href:"https://aaltodoc.aalto.fi/doc_public/export/bibtex/?url=https://aaltodoc.aalto.fi/handle/123456789/46042",target:"_blank",rel:"noopener noreferrer"}},[e._v("BibTeX"),t("OutboundLink")],1),e._v("]")])]),e._v(" "),t("h2",{attrs:{id:"projects"}},[e._v("Projects")]),e._v(" "),t("ProjectCard",[t("p",[t("strong",[e._v("Image-based large-scale indoor visual localization on mobile devices")])]),e._v(" "),t("p",[e._v("The project creates a localization demo for large-scale indoor environment . I contributed to the building of database and SFM model, evaluating the SoAT approaches such as Hierarchical Localization, HSC-Net, DASC++, establishing a client-server connection.")]),e._v(" "),t("p",[e._v("["),t("a",{attrs:{href:"https://drive.google.com/file/d/1CXAP-enEPagvxJCkJZnz0Ir-anjIE_0Y/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"}},[e._v("Video"),t("OutboundLink")],1),e._v("]")])]),e._v(" "),t("ProjectCard",[t("p",[t("strong",[e._v("Ship Thruster Interface")])]),e._v(" "),t("p",[e._v("The project is to provide an intelligent maneuvering system for tugboats, enabling multiple vessels to coordinate their movements efficiently while assisting larger ships when entering and leaving the harbor. I mainly participated in the design of the control node and the communication between the ROS and the physical layer.")]),e._v(" "),t("p",[e._v("["),t("a",{attrs:{href:"https://wiki.aalto.fi/download/attachments/151495776/Final%20report.pdf?api=v2",target:"_blank",rel:"noopener noreferrer"}},[e._v("PDF"),t("OutboundLink")],1),e._v("] ["),t("a",{attrs:{href:"https://wiki.aalto.fi/display/AEEproject/Ship+thruster+interface",target:"_blank",rel:"noopener noreferrer"}},[e._v("Page"),t("OutboundLink")],1),e._v("]")])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);