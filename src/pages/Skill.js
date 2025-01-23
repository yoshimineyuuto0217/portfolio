import React from "react";

const SkilL = () => {
  return (
    <>
      <h2>Skills</h2>
      <div className="skills">
        <div className="design">
          <h3>Design</h3>
          <p className="text">
            Webサイトのデザインを制作することができます。
            ジャンルにとらわれず、様々なテイストのデザインを制作します。
            また、情報設計や機能性など、ユーザー側にも配慮したデザインを
            心掛けています。
          </p>
          <p className="tool">Figma</p>
          <p className="tool">Photoshop</p>
        </div>
        <div className="coding">
          <h3>Coding</h3>
          <p className="text">
            HTML/CSSを用いてデザインを正しく再現することができます。
            また、Javascript/jQueryを用いて複雑な動きをサイトに動きをつけることも可能です。
            どのデバイスで見ても崩れることがないように注意して制作しています。
          </p>
          <p className="tool">HTML</p>
          <p className="tool">CSS</p>
          <p className="tool">Javascript</p>
          <p className="tool">WordPress</p>
        </div>
      </div>
    </>
  );
};

export default SkilL;
