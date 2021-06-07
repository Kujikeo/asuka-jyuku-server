const ip = require('ip')
const Auditoria = require('../models/Auditoria')
const { format, parse } = require('date-fns')
const localidadeBrasil = require('date-fns/locale/pt-BR')

module.exports = {
  /** Recuperar as informações de auditoria considerando a data e hora atuais */
  async getAuditoria() {
    var auditoria = new Auditoria()

    const dataAtual = new Date()

    const horarioFormatdo = format(dataAtual, 'HH:mm:ss', {
      locale: localidadeBrasil
    })

    auditoria.setIp(ip.address())
    auditoria.setData(dataAtual)
    auditoria.setHorario(horarioFormatdo)

    return auditoria
  }
}