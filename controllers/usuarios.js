const { request, response } = require('express');
const usuariosGet = (req = request, res = response) => {
  const { q, nombre, apikey } = req.query;
  res.json({
    ok: true,
    msg: 'get API -  controlador',
    q,
    nombre,
    apikey
  });
}
const usuariosPut = (req, res) => {// Actualizar datos
  const { id } = req.params;
  res.json({
    ok: true,
    msg: 'put API -  controlador',
    id
  });
}

const usuariosPost = (req, res) => {// crear nuevos recursos // nuevo usuario
  const { nombre, edad } = req.body;
  res.json({
    ok: true,
    msg: 'post API - controladorrrr',
    nombre,
    edad
  });
}

const usuariosDelete = (req, res) => {// el registro se elimino
  res.json({
    ok: true,
    msg: 'delete API - controlador'
  });
}

const usuariosPatch = (req, res) => {//
  res.status(403).json({
    ok: true,
    msg: 'patch API - controlador'
  });
}

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch
}