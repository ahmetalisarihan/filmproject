import React from 'react'
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://github.com/ahmetalisarihan" target="_blank">
      Ahmet Ali SARIHAN
      </Link>
    </footer>
  )
}

export default Footer