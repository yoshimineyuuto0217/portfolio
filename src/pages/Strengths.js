import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

const Strengths = () => {
  const { ref } = useInView({
    triggerOnce: true, // 1回だけアニメーションを実行
    threshold: 0.6, // 60%見えたら発火
  });

  return (
    <>
      <h2>Strengths</h2>
      <div className="strength">
        <motion.div
          ref={ref}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="iti"
        >
          <h4 className="h4">こだわりが強い</h4>
          <p>
            細部にまで目を配り、完成度の 高いデザインやコーディングを
            追求します。一つひとつの案件 に対し、クオリティに妥協せず、
            お客様の理想を形にするために 最善を尽くします。
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -150 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="ni"
          id="n"
        >
          <h4 className="h4">向上心が強い</h4>
          <p>
            常に最新のトレンドや技術を学び、 自分のスキルを磨くことに熱心です。
            新しい知識や挑戦を楽しみながら 成長し続けることで、
            より多様なニーズに対応できる デザイナー兼コーダーを 目指しています。
          </p>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="san"
          id="s"
        >
          <h4 className="h4">提案力</h4>
          <p>
            お客様の要望を丁寧にヒアリングし、 課題を的確に把握することで、
            より良い解決策を提案できます。 デザイン面だけでなく、
            ユーザー視点で見た提案が得意です。
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Strengths;
