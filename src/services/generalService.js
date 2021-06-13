import moment from "moment";
import i18next from "i18next";

export const buscarTexto = (obj, buscado, index = 0) => {
    let texto = '';
    let propiedad = buscado[index];
    if (buscado.length === (index + 1)) {
        if (typeof obj[propiedad] !== "undefined" && obj[propiedad] !== null)
            texto = obj[propiedad];
    } else {
        index++;
        obj = (typeof obj[propiedad] !== "undefined" && obj[propiedad] !== null) ? obj[propiedad] : {};
        texto = buscarTexto(obj, buscado, index);
    }
    return texto;
};

export const copiarPortapapeles = (nombreDiv) => {
    let el = document.getElementById(nombreDiv);
    let body = document.body, range, sel;
    if (document.createRange && window.getSelection) {
        range = document.createRange();
        sel = window.getSelection();
        sel.removeAllRanges();
        try {
            range.selectNodeContents(el);
            sel.addRange(range);
        } catch (e) {
            range.selectNode(el);
            sel.addRange(range);
        }
    } else if (body.createTextRange) {
        range = body.createTextRange();
        range.moveToElementText(el);
        range.select();
    }
    document.execCommand('copy');
    sel.removeAllRanges();
    alert(i18next.t('general:copiadoCorrecto'));
};


export const procesarConfiguraciones = (catalogo) => {
    let config = {};
    (catalogo || []).map((cat, index) => {
        config[cat.nombre] = cat.valor;
    });
    return config;
};

export const getAnyosAnteriores = (anyos) => {
    let array_anyos = [];
    let actual = moment().year();
    for (var i = anyos; i > 0; i--) {
        array_anyos = [...array_anyos, {anyo: actual, id: i}];
        actual--;
    }
    return array_anyos;
}


export const noop = () => {
}

export const batchCorrecto = (batch) => {
    var correcto = false;
    if(typeof batch === "number")
        batch = batch.toString();
    if (batch != null) {
        if (batch.length === 8 )
            correcto = true;
    }
    return correcto;
}

export const agregarRegistroVacio = ( catalogo) =>{
    catalogo.push({id:null, nombre:''});
    return catalogo;
}

export const ordenarBatchs = batchs => batchs.sort((a,b)=>a.anyoBatch + b.anyoBatch);