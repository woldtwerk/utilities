export * from './modules/once'

document.querySelectorAll('#app').once()
document.querySelectorAll('.key, .key2').once('abc')
document.querySelectorAll('.key2').once('def')
