'use client'
import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import Image from 'next/image'
import previewImage from '../../../public/assets/app-preview.png'
import { ClaimUsernameForm } from './components/clainUsernameForm'

export default function Home() {
  return (
    <div>
      <Container>
        <Hero>
          <Heading size="4xl">Agendamento Descomplicado</Heading>
          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>
          <ClaimUsernameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImage}
            alt="Preview"
            height={400}
            quality={100}
            priority
          />
        </Preview>
      </Container>
    </div>
  )
}
