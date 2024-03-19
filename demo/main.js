const {PLATFORM} = 'aurelia-framework';

export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .globalResources([
      PLATFORM.moduleName('aurelia-slot-machine')
    ]);

  aurelia.start()
    .then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
