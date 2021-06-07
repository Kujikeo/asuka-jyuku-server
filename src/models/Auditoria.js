class Auditoria {
    constructor(ip, usuario, horario, data) {
      this.ip;
      this.usuario;
      this.horario;
      this.data;
    }
  
    setIp(ip) {
      this.ip = ip;
    }
    setUsuario(usuario) {
      this.usuario = usuario;
    }
    setHorario(horario) {
      this.horario = horario;
    }
    setData(data) {
      this.data = data;
    }
  }
  module.exports = Auditoria;