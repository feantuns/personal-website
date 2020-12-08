import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks"

import * as S from "../components/Post/styled"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <S.MainContent>
      <h1>Sobre mim</h1>
      <p>
        Olá!{" "}
        <span role="img" aria-label="Hand making Hi">
          👋
        </span>{" "}
        &nbsp; Eu sou o Felipe, eu gosto muito de aprender mais sobre
        tecnologias e a web em geral a cada dia.
      </p>
      <p>
        Eu gosto de criar experiências incríveis e meu objetivo é poder ajudar a
        vida das pessoas fornecendo websites que sejam intuitivos e fáceis de
        usar.
      </p>
      <p>
        Eu queria ter um lugar para compartilhar as coisas que aprendo, então
        decidi criar esse blog!{" "}
        <span role="img" aria-label="Happy face">
          😃
        </span>
      </p>
      <h2>Contato</h2>
      <p>
        Você pode entrar em contato comigo através de qualquer uma das minhas
        redes sociais.
      </p>
      <SocialLinks showAlways />
      <h2>CV</h2>
      <p>
        Caso tenha curiosidade e deseje saber mais sobre minhas habilidades
        técnicas e experiências profissionais, dê uma olhada no meu CV.
      </p>
      <p>
        <a
          href="https://drive.google.com/file/d/1FTzuJWYLEKSmi0QIv3QGjoHqedKbovMm/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          Português
        </a>
      </p>
      <p>
        <a
          href="https://drive.google.com/file/d/1Xn-_k-hxj1ocXpLyn7N3B9Njod3Vbf3C/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          English
        </a>
      </p>
    </S.MainContent>
  </Layout>
)

export default AboutPage
