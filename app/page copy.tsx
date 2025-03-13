import React from "react";
import Image from 'next/image';
import styles from "./Uminomorisuke.module.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBrush } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faFileWord } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';



const images = [
  { baseName: "01_片手振り", src: "/images/noimage.png", alt: "01 片手振り" },
  { baseName: "02_両手振り", src: "/images/noimage.png", alt: "02 両手振り" },
  { baseName: "03_ジャンプ", src: "/images/noimage.png", alt: "03 ジャンプ" },
  { baseName: "04_走る", src: "/images/noimage.png", alt: "04 走る" },
  { baseName: "05_笑顔", src: "/images/noimage.png", alt: "05 笑顔" },
  { baseName: "06_手を広げる", src: "/images/noimage.png", alt: "06 手を広げる" },
  { baseName: "07_指差し", src: "/images/07_うみのもりすけ_どんぐり腰掛け.png", alt: "07 指差し" },
  { baseName: "08_バンザイ", src: "/images/noimage.png", alt: "08 バンザイ" },
  { baseName: "09_考える", src: "/images/noimage.png", alt: "09 考える" },
  { baseName: "10_手を合わせる", src: "/images/noimage.png", alt: "10 手を合わせる" },
  { baseName: "11_手を振る", src: "/images/noimage.png", alt: "11 手を振る" },
  { baseName: "12_歩く", src: "/images/noimage.png", alt: "12 歩く" },
  { baseName: "13_座る", src: "/images/noimage.png", alt: "13 座る" },
  { baseName: "14_寝る", src: "/images/noimage.png", alt: "14 寝る" },
  { baseName: "15_立つ", src: "/images/noimage.png", alt: "15 立つ" },
  { baseName: "16_手をつなぐ", src: "/images/noimage.png", alt: "16 手をつなぐ" },
  { baseName: "17_挨拶", src: "/images/noimage.png", alt: "17 挨拶" },
  { baseName: "18_喜ぶ", src: "/images/noimage.png", alt: "18 喜ぶ" },
  { baseName: "19_驚く", src: "/images/noimage.png", alt: "19 驚く" },
  { baseName: "20_左手指差し", src: "/images/noimage.png", alt: "20 左手指差し" },
];




config.autoAddCss = false

const Uminomorisuke = () => {
  return (
    <div className={styles.uContainer}>
      <h1 className={styles.uTitle}>
        海の森公園 公式マスコットキャラクター「うみのもりすけ」
      </h1>
      <h4 className={styles.uTitle1}>うみのもりすけについて紹介するよ！</h4>
      <section className={styles.uProfile}>
        <h2 className={styles.uSubtitle}>
          <FontAwesomeIcon className={styles.icon} icon={faUser} size="sm" />
          プロフィール
        </h2>
        <div className={styles.maincontainer} >
          <div className={styles.uProfileContent} >
            {/* 画像を左側に配置 */}
            <div className={styles.uProfileImage}>
              <Image
                className={styles.uProfileImagePic}
                src="/images/noimage.png" // 画像のパス（public/images/noimage.jpg）
                alt="うみのもりすけの画像"
                width={300}   // 画像の幅（px）
                height={300}  // 画像の高さ（px）
                layout="intrinsic" // 固定サイズで表示
              />
            </div>

            {/* 左側にプロフィール内容 */}
            <div className={styles.uProfileText}>
              <div className={styles.uLeft}>
                <p><strong>なまえ</strong></p><p>うみのもりすけ</p>
                <p><strong>年齢</strong></p><p>ひみつ</p>
                <p><strong>口癖</strong></p><p>「もりもり！」「すけすけ〜」</p>
                <p><strong>趣味</strong></p><p>海の森公園の魅力を集めること</p>
              </div>

              {/* 右側に好きなこと、苦手なこと、特技 */}
              <div className={styles.uRight}>
                <p><strong>好きなこと</strong></p><p>子供達と遊ぶこと</p>
                <p><strong>苦手なこと</strong></p><p>暑すぎる日・寒すぎる日</p>
                <p><strong>特技</strong></p><p>木登り、水遊び、ゴミ拾い</p>
              </div>
            </div>
          </div>

          <p className={styles.customText}>海の森公園で発見された幻の生物</p>
        </div>
      </section>

      <section className={styles.uDownload}>
        <h2 className={styles.uSubtitle}>
          <FontAwesomeIcon className={styles.icon} icon={faBrush} size="sm" />
          ぬりえ
        </h2>
        <a href="#" className={styles.uWallpaperLink}>
          <Image
            className={styles.uWallpaper}
            src="/images/noimage.png"
            alt="スマートフォン用壁紙"
            width={1080}
            height={1920}
            layout="responsive"
          />
        </a>
        <button className={styles.uDownloadButton}>ダウンロード</button>
          
        <h2 className={styles.uSubtitle}>
        <FontAwesomeIcon className={styles.icon} icon={faLaptop} size="sm" />
        <FontAwesomeIcon className={styles.icon} icon={faMobileScreenButton} size="sm" />
          壁紙ダウンロード</h2>
        <div className={styles.maincontainer} >
          <div className={styles.uWallpapers}>
            <a href="#" className={styles.uWallpaperLink}>
              <Image
                className={styles.uWallpaper}
                src="/images/壁紙_PC.png"
                alt="PC用壁紙"
                width={1920}
                height={1080}
                layout="responsive"
              />
              <p>PC用（1920×1080）</p>
              <p>スマートフォン用（1080×1920）</p>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.uUsage}>
        <h2 className={styles.uSubtitle}>
          <FontAwesomeIcon className={styles.icon} icon={faFile} size="sm" />
            海の森公園公式マスコットキャラクター「うみのもりすけ」の利用について
        </h2>
        <div className={styles.maincontainer} >
          
          <p className={styles.customText}>
            海の森公園公式マスコットキャラクター「うみのもりすけ」のデザインを使用したい、グッズを作製したいという場合には、事前にXXXXXXXXの承認が必要です。海の森公園公式マスコットキャラクター「うみのもりすけ」デザイン利用取扱要領を確認の上、利用承認申請書をご提出ください。なお、デザイン使用料は無料です。企業や団体等のキャラクターと誤認されるような使用は認められませんので、ご注意ください。
          </p>
          <div className={styles.container}>
            <p className={styles.subtitle}>マスコットキャラクター利用申請書</p>
      
            <section className={styles.section}>
              <ul className={styles.fileList}>
                <li>
                  <a href="#" className={styles.aText}>
                    <FontAwesomeIcon className={styles.icon} icon={faFileWord} size="sm" />
                    申請書 記入様式（ワードファイル20KB）
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.aText}>
                    <FontAwesomeIcon className={styles.icon} icon={faFilePdf} size="sm" />
                    申請書 記入例（PDFファイル36KB）
                  </a>
                </li>
              </ul>
            </section>
      
            <section className={styles.section}>
              <p className={styles.subtitle}>申請から承認までの流れ</p>
              <p className={styles.customText}>使用申請書に必要事項を記入したうえ、次の書類（様式不問）を添付し、下記提出先まで、直接持参、郵送、ＦＡＸ、Ｅメールにて提出してください。</p>
              <p><strong>(添付書類)</strong></p>
              <p>1.申請者の概要 2.企画書等（レイアウト、原稿等）3.改変内容（改変する場合）</p>
              <p className={styles.pointText}>・原則として、１使用・商品につき、１枚の申請書の提出が必要です。</p>
              <p className={styles.pointText}>・提出後、XXXXX事務所で審査を行い、審査が通れば使用承認通知をお送りします。</p>
              <p className={styles.pointText}>・承認通知が届きましたら、使用やグッズの作製を始めて構いません。すみやかに見本としてXXXXX事務所に送付してください。</p>
              <p className={styles.pointText}>・なお、承認通知には利用条件を記載しますので、必ず遵守してください。</p>
              <p className={styles.pointText}>・申請から承認まで、概ね１週間～2週間程度かかります。</p>
            </section>

            <section className={styles.section}>
              <p><strong>＜提出先＞</strong></p>
              <p className={styles.pointText}>〒180-0005 東京都武蔵野市御殿山１-１７-５９</p>
              <p className={styles.pointText}>東京都西部公園緑地事務所 ひゃくさいくん担当</p>
              <p className={styles.pointText}>電話: 0422-47-0364</p>
              <p className={styles.pointText}>FAX: 0422-49-8316</p>
              <p className={styles.pointText}>E‐mail: <a href="mailto:S0200219@section.metro.tokyo.jp">S0200219@section.metro.tokyo.jp</a></p>
            </section>
          </div>
        </div>
      </section>

      <section className={styles.uUsage}>
        <h2 className={styles.uSubtitle}>
          <FontAwesomeIcon className={styles.icon} icon={faFile} size="sm" />
            使用できるデザインについて
        </h2>
        <div className={styles.maincontainer} >
          <p className={styles.customText}>次のイラスト集のものが使用できます。</p>
          <p className={styles.customText}>改変する場合は、申請書で「改変有」にチェックを付けて、改変内容を添付し審査を受けてください。</p>
          <p className={styles.customText}>※AIファイル形式は、広くデザイン関係等で使用されているAdobe Systems社のグラフィックスソフト「Adobe Illustrator」で利用される画像データのファイル形式です。</p>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-5 gap-4">
              {images.map((image, index) => (
                <div key={index} className="flex flex-col items-center p-4">
                  {/* 画像表示 */}
                  <div className="relative w-40 h-40">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={160}
                      height={160}
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                     />
                  </div>

                  {/* 画像タイトル */}
                  <p className="mt-2 text-center text-sm font-semibold">{image.alt}</p>

                  {/* ダウンロードリンク */}
                  <div className="flex flex-wrap justify-center text-[12px] text-[#40916C]">
                    <a href={`/downloads/${image.baseName}.jpg`} download className="px-2 hover:underline">
                      カラー(JPEG)
                    </a>
                    <a href={`/downloads/${image.baseName}.ai`} download className="px-2 hover:underline">
                      カラー(AI)
                    </a>
                    <a href={`/downloads/${image.baseName}_bw.jpg`} download className="px-2 hover:underline">
                      白黒(JPEG)
                    </a>
                    <a href={`/downloads/${image.baseName}_bw.ai`} download className="px-2 hover:underline">
                      白黒(AI)
                    </a>
                 </div>
               </div>
             ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.uContact}>
        <h2 className={styles.uSubtitle}>お問い合わせ</h2>
        <p>臨海開発部海上公園課</p>
        <p>電話：03-5320-5578</p>
      </section>
    </div>
  );
};

export default Uminomorisuke;
