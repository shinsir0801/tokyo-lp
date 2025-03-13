import React from "react";
import Image from 'next/image';
import styles from "./Uminomorisuke.module.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faFileWord } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';




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
        海の森公園マスコットキャラクター「うみのもりすけ」
      </h1>
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
                width={550}      // プロフィールと同じ幅
                height={850}     // プロフィールと同じ高さ
                layout="intrinsic" // 固定サイズで表示
              />
            </div>

            <div className={styles.uProfileText}>
              <div className={styles.uLeft}>
                <p><strong>なまえ</strong>うみのもりすけ</p>
                <p><strong>好きなこと</strong>子供達と遊ぶこと</p>
                <p><strong>特技</strong>木登り、水遊び、ゴミ拾い</p>
                <p className={styles.customText}>海の森公園で発見された幻の生物</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.uProfile}>
        <h2 className={styles.uSubtitle}>
          <FontAwesomeIcon className={styles.icon} icon={faUser} size="sm" />
          うみのもりすけ ぬりえ
        </h2>
        <div className={styles.maincontainer} >
          <div className={styles.uProfileContent} >
            {/* 画像を左側に配置 */}
            <div className={styles.uProfileImage}>
              <Image
                className={styles.uProfileImagePic}
                src="/images/noimage.png" // 画像のパス（public/images/noimage.jpg）
                alt="うみのもりすけぬりえ"
                width={550}      // プロフィールと同じ幅
                height={850}     // プロフィールと同じ高さ
                layout="intrinsic" // 固定サイズで表示
              />
            </div>

            <div className={styles.uColoringRight}>
              <p className={styles.downloadText}>
                下記のリンクからPDFをダウンロードしてお使いください。
              </p>
              <div className={styles.downloadGrid}>
                <a href="/images/noimage.png" download className={styles.uDownloadButton}>PDF 1</a>
                <a href="/images/noimage.png" download className={styles.uDownloadButton}>PDF 2</a>
                <a href="/images/noimage.png" download className={styles.uDownloadButton}>PDF 3</a>
                <a href="/images/noimage.png" download className={styles.uDownloadButton}>PDF 4</a>
                <a href="/images/noimage.png" download className={styles.uDownloadButton}>PDF 5</a>
                <a href="/images/noimage.png" download className={styles.uDownloadButton}>PDF 6</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.uDownload}>
        <h2 className={styles.uSubtitle}>
          <FontAwesomeIcon className={styles.icon} icon={faLaptop} size="sm" />
          <FontAwesomeIcon className={styles.icon} icon={faMobileScreenButton} size="sm" />
            うみのもりすけ 壁紙ダウンロード
        </h2>
        <div className={styles.uWallpaperDownloadSection}>
          {/* 左側：画像 */}
          <div className={styles.uWallpaperLeft}>
            <a href="#" className={styles.uWallpaperLink}>
              <Image
                className={styles.uWallpaper}
                src="/images/壁紙_PC.png"
                alt="PC用壁紙"
                width={1920}
                height={1080}
                layout="responsive"
              />
            </a>
          </div>
          {/* 右側：テキストとダウンロードボタン群 */}
          <div className={styles.uWallpaperRight}>
            <p className={styles.downloadText}>
              下記のリンクから壁紙をダウンロードしてお使いください。
            </p>
            <div className={styles.downloadGridTwo}>
              <a href="#" download className={styles.uDownloadButton}>
                PC用（1920×1080）
              </a>
              <a href="#" download className={styles.uDownloadButton}>
                スマートフォン用（1080×1920）
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.uUsage}>
        <h2 className={styles.uSubtitle}>
          <FontAwesomeIcon className={styles.icon} icon={faFile} size="sm" />
          うみのもりすけ イラスト利用申請
        </h2>
        <div className={styles.maincontainer} > 
          <p className={styles.customText}>
            海の森公園公式マスコットキャラクター「うみのもりすけ」のデザインを使用したい、グッズを作製したいという場合には、事前にXXXXXXXXの承認が必要です。海の森公園公式マスコットキャラクター「うみのもりすけ」デザイン利用取扱要領を確認の上、利用承認申請書をご提出ください。なお、デザイン使用料は無料です。企業や団体等のキャラクターと誤認されるような使用は認められませんので、ご注意ください。
          </p>
          <div className={styles.buttonContainer}>
            <a href="#" download className={styles.uDownloadButton}>
              <FontAwesomeIcon className={styles.icon} icon={faFileWord} size="sm" />
                申請書 記入様式（ワードファイル20KB）
            </a>
            <a href="#" download className={styles.uDownloadButton}>
              <FontAwesomeIcon className={styles.icon} icon={faFilePdf} size="sm" />
                申請書 記入例（PDFファイル36KB）
            </a>
          </div>
        </div>
      </section>

      <section className={styles.uUsage}>
        <h2 className={styles.uSubtitle}>
          <FontAwesomeIcon className={styles.icon} icon={faFile} size="sm" />
          使用できるデザインについて
        </h2>
        <div className={styles.maincontainer}>
          <p className={styles.customText}>次のイラスト集のものが使用できます。</p>
          <p className={styles.customText}>改変する場合は、申請書で「改変有」にチェックを付けて、改変内容を添付し審査を受けてください。</p>
          <p className={styles.customText}>※AIファイル形式は、Adobe Illustratorで利用される画像データのファイル形式です。</p>
          <div className={styles.downloadGrid}>
  {images.map((image, index) => (
   <a
   key={index}
   href={`/downloads/${image.baseName}.jpg`}
   download
   className={`${styles.uDownloadButton} text-center`}
 >
   {image.alt} <span className={styles.breakLine}>ダウンロード</span>
 </a>
  ))}
</div>
        </div>
      </section>

      <section className={styles.uContact}>
      <div className={styles.maincontainer}>
      <h2 className={styles.uSubtitle}>
  <FontAwesomeIcon className={styles.icon} icon={faEnvelope} size="sm" />
  お問い合わせ
</h2>
<div className={styles.maincontainer}>
  <p className={styles.customText}>臨海開発部海上公園課</p>
  <p className={styles.customText}>電話：03-5320-5578</p>
  
</div>
        </div>
      </section>
    </div>
    
  );
};

export default Uminomorisuke;
