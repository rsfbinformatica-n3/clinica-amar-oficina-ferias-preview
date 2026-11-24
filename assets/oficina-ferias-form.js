(function () {
  'use strict';
  var form = document.getElementById('amar-oficina-form');
  if (!form || typeof amarOficinaForm === 'undefined') {
    return;
  }
  var feedback = form.querySelector('.amar-of-feedback');
  var submitBtn = form.querySelector('.amar-of-submit');

  function mostrarMensagem(texto, tipo) {
    if (!feedback) return;
    feedback.textContent = texto;
    feedback.className = 'amar-of-feedback is-' + tipo;
  }

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';
    }
    mostrarMensagem('', '');

    var dados = new FormData(form);
    dados.append('action', 'amar_inscricao_oficina_submit');
    dados.append('nonce', amarOficinaForm.nonce);

    fetch(amarOficinaForm.ajaxUrl, {
      method: 'POST',
      credentials: 'same-origin',
      body: dados
    })
      .then(function (r) { return r.json(); })
      .then(function (json) {
        if (json && json.success) {
          mostrarMensagem(json.data.mensagem, 'sucesso');
          form.reset();
          form.querySelectorAll('input, select, button').forEach(function (el) {
            if (el !== submitBtn) el.disabled = false;
          });
          if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Pré-inscrição enviada';
          }
        } else {
          var msg = (json && json.data && json.data.mensagem) || 'Não foi possível enviar sua inscrição. Tente novamente.';
          mostrarMensagem(msg, 'erro');
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar pré-inscrição';
          }
        }
      })
      .catch(function () {
        mostrarMensagem('Falha de conexão. Verifique sua internet e tente novamente.', 'erro');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Enviar pré-inscrição';
        }
      });
  });
})();
