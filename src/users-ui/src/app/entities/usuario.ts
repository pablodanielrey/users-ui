
export interface CambiarClaveData {
  uid: string;
  clave: string;
}

export interface PrecondicionesData {
  correo: boolean;
  clave: boolean;
}


export class Usuario {
    
    id: string = null;
    creado: Date = null;
    actualizado: Date = null;

    nombre: string = null;
    apellido: string;
    dni: string;
    legajo: string; 
    
    avatar: string;
    ciudad: string;
    direccion: string;
    genero: string;
    mails: Array<Mail>;
    nacimiento:null
    pais:null
    telefonos:Array<Telefono>;
    tipo: any = null    
  
  
    constructor(o:Object) {
      try {
        Object.assign(this, o);
        this.creado = (this.creado == null ? null : new Date(this.creado));
        this.actualizado = (this.actualizado == null ? null : new Date(this.actualizado));
      } catch(e) {
        console.log(e);
      }
    }    
}


export class Mail {
  id: string = null;
  email: string;
  creado: Date = null;
  actualizado: Date = null; 

  constructor(o:object) {
    try {
      Object.assign(this, o);
      this.creado = (this.creado == null ? null : new Date(this.creado));
      this.actualizado = (this.actualizado == null ? null : new Date(this.actualizado));
    } catch(e) {
      console.log(e);
    }
  }

  esInstitucional(): boolean {
    let domain = this.email.split('@')[1];    
    return domain.includes('econo.unlp.edu.ar');
  }
}

export class Telefono {
  id: string = null;
  nro: string;
  tipo: string;
}