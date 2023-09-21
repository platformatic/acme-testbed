import { FastifyInstance } from 'fastify'
import { PlatformaticApp } from '@platformatic/service'
import type { AcmeBaseConfig } from '@platformatic/acme-base'

declare module 'fastify' {
  interface FastifyInstance {
    platformatic: PlatformaticApp<AcmeBaseConfig>
  }
}
