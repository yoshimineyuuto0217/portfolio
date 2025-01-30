
// import { useInView } from 'framer-motion';
import {  motion } from "framer-motion";
import React from 'react'

const Flow = () => {
  // この書き方はなぜか反応しないのでmotin.divでviewportを使って直接渡す
  // const { ref } = useInView({
  //   triggerOnce: true, // 1回だけアニメーションを実行
  //   threshold: 0.8, // 60%見えたら発火
  // });
  return (
    <>
    <h2>Flow</h2>
    <div className="strengths">
      <motion.div className="one"
      // ref={ref}
      whileInView={{ opacity: 1}}
      initial={{ opacity: 0}}
      viewport={{once:true, amount: 1 }}
      transition={{ duration: 0.5 , delay: 1 }}>
        <h4>ヒアリング</h4>
        <p>
        ヒアリングを通して、現状の状況を深掘りし、クライアント様が抱える
        課題や悩みを明確に致します。
        </p>
      </motion.div>
      <div className="tryAngle"></div>
      <motion.div className="one"
      // ref={ref}
      whileInView={{ opacity: 1}}
      initial={{ opacity: 0}}
      viewport={{once:true, amount: 1 }}
      transition={{ duration: 0.5 , delay: 1 }}>
        <h4>お見積もり</h4>
        <p>
          常に最新のトレンドや技術を学び、 自分のスキルを磨くことに熱心です。
          新しい知識や挑戦を楽しみながら 成長し続けることで、
          より多様なニーズに対応できる デザイナー兼コーダーを 目指しています。
        </p>
        </motion.div>
      <div className="tryAngle"></div>
      <motion.div className="one"
      // ref={ref}
      whileInView={{ opacity: 1}}
      initial={{ opacity: 0}}
      viewport={{once:true, amount: 1 }}
      transition={{ duration: 0.5, delay: 1  }}>
        <h4>作業着手</h4>
        <p>
          お客様の要望を丁寧にヒアリングし、 課題を的確に把握することで、
          より良い解決策を提案できます。 デザイン面だけでなく、
          ユーザー視点で見た提案が得意です。
        </p>
        </motion.div>
      <div className="tryAngle"></div>
      <motion.div className="one"
      // ref={ref}
      whileInView={{ opacity: 1}}
      initial={{ opacity: 0}}
      viewport={{once:true, amount: 1 }}
      transition={{ duration: 0.5 , delay: 1 }}>
        <h4>クライアント確認</h4>
        <p>
          お客様の要望を丁寧にヒアリングし、 課題を的確に把握することで、
          より良い解決策を提案できます。 デザイン面だけでなく、
          ユーザー視点で見た提案が得意です。
        </p>
        </motion.div>
      <div className="tryAngle"></div>
      <motion.div className="one"
      // ref={ref}
      whileInView={{ opacity: 1}}
      initial={{ opacity: 0}}
      viewport={{once:true, amount: 1 }}
      transition={{ duration: 0.5 , delay: 1 }}>
        <h4>修正・納品</h4>
        <p>
          お客様の要望を丁寧にヒアリングし、 課題を的確に把握することで、
          より良い解決策を提案できます。 デザイン面だけでなく、
          ユーザー視点で見た提案が得意です。
        </p>
        </motion.div>
    </div>
  </>
  )
}

export default Flow

