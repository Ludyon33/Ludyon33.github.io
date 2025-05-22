function generarVCF(nombre, primerApellido, segundoApellido, puesto, celular, correo){

    const vcf = [
        `BEGIN:VCARD`,
        `VERSION:3.0`,
        `FN;CHARSET=UTF-8:${nombre} ${primerApellido} ${segundoApellido}`,
        `N;CHARSET=UTF-8:${segundoApellido};${nombre};${primerApellido};;`,
        `EMAIL;CHARSET=UTF-8;type=WORK,INTERNET:${correo}@handheldsolutions.com.mx`,
        `TEL;TYPE=CELL:${celular}`,
        `TEL;TYPE=WORK,VOICE:+525551156043`,
        `ADR;CHARSET=UTF-8;TYPE=WORK:;;Heriberto Frías #249\, Narvarte Poniente;Benito Juárez;Ciudad de México;03020;México`,
        `TITLE;CHARSET=UTF-8:${puesto}`,
        `ORG;CHARSET=UTF-8:Hand Held Solutions`,
        `URL;type=WORK;CHARSET=UTF-8:https://handheldsolutions.com.mx`,
        `REV:2025-05-21T19:06:23.899Z`,
        `END:VCARD`].join("\r\n");

    const blob = new Blob([vcf], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}