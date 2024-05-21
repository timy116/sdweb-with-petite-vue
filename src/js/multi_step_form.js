import { createApp, nextTick } from "petite-vue";
console.log('Inside app.js');

function FieldComponent(props) {
  return {
    $template: "#field-component-template",
    field: props.field,
    get isInvalid() {
      return props.isInvalid();
    },
    get invalidMessage() {
      return props.invalidMessage();
    },
    // methods
    validate() {
      nextTick(() => {
        if (this.isInvalid) {
          props.validate();
        }
      }).then(r => console.log(this.field.value));
    }
  };
}

function StepsIndicatorComponent(props) {
  return {
    $template: "#step-indicator-component-template",
    stepsCount: props.stepsCount,
    get stepsCountWithSuccessPage() {
      return this.stepsCount + 1;
    }
  };
}
createApp({
  // components
  FieldComponent,
  StepsIndicatorComponent,
  // Data
  submitted: false,
  currentStep: 0,
  invalids: {},
  fields: {
    name: {
      label: "Name",
      value: "",
      validations: [
        {
          message: "Name is required",
          test: (value) => value
        }
      ]
    },
    email: {
      label: "Email",
      value: "",
      validations: [
        {
          message: "Must be a valid email address",
          test: (value) => validateEmail(value)
        },
        {
          message: "Email is required",
          test: (value) => value
        }
      ]
    },
    address: {
      label: "Address",
      value: "",
      validations: [
        {
          message: "Address is required",
          test: (value) => value
        }
      ]
    },
    city: {
      label: "City",
      value: "",
      validations: [
        {
          message: "City is required",
          test: (value) => value
        }
      ]
    },
    state: {
      label: "State",
      value: "",
      validations: [
        {
          message: "State is required",
          test: (value) => value
        }
      ]
    },
    zip: {
      label: "Z.I.P",
      value: "",
      validations: [
        {
          message: "Z.I.P is required",
          test: (value) => value
        },
        {
          message: "Z.I.P must have 5 digits",
          test: (value) => !isNaN(value) && value.length === 5
        }
      ]
    },
    donationAmount: {
      label: "Amount to donate",
      value: "",
      validations: [
        {
          message: "Donation is required",
          test: (value) => value
        },
        {
          message: "Donation amount must be a valid number",
          test: (value) => !isNaN(value)
        }
      ]
    }
  },
  steps: [
    ["name", "email"],
    ["address", "city", "state", "zip"],
    ["donationAmount"]
  ],

  // Getters
  get currentFields() {
    return this.steps[this.currentStep];
  },
  get totalSteps() {
    return this.steps.length;
  },
  get isFirstStep() {
    return this.currentStep === 0;
  },
  get isLastStep() {
    return this.currentStep === this.totalSteps - 1;
  },

  // Methods
  previousStep() {
    if (this.isFirstStep) {
      return;
    }
    // removes all invalids so doesn't show error messages on back
    this.invalids = {};
    this.currentStep--;
  },
  nextStep() {
    if (this.isLastStep) {
      return;
    }
    this.validate();
    if (this.isInvalid) {
      return;
    }
    this.currentStep++;
  },
  get isInvalid() {
    return !!Object.values(this.invalids).filter((key) => key).length;
  },

  // methods
  validate() {
    this.invalids = {};
    // validates all the fields on the current page
    this.currentFields.forEach((key) => {
      this.validateField(key);
    });
  },
  validateField(fieldKey) {
    this.invalids[fieldKey] = false;
    const field = this.fields[fieldKey];
    // run through each of the fields validation tests
    field.validations.forEach((validation) => {
      if (!validation.test(field.value)) {
        this.invalids[fieldKey] = validation.message;
      }
    });
  },
  reloadPage() {
    window.location.reload();
  },

  submit() {
    // if form not valid don't submit
    this.validate();
    if (this.isInvalid) {
      return;
    }

    // submit on valid form
    console.log("doing submit a:", JSON.stringify(this.fields));
    this.submitted = true;
  },
  preventReload() {
    this.onbeforeunload = function() {
      return `Are you sure to reload the window? you have unsaved data`
    };
  }


}).mount("#multi-step-form");

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
/* const beforeUnloadListener = (event) => {
  event.preventDefault();
  return event.returnValue = "Are you sure you want to exit?";
};
const nameInput = document.querySelector("#formId");
console.log(nameInput);

nameInput.addEventListener("input", (event) => {
  if (event.target.value !== "") {
    addEventListener("beforeunload", beforeUnloadListener, {capture: true});
  } else {
    removeEventListener("beforeunload", beforeUnloadListener, {capture: true});
  }
}); */