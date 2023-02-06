/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about/edit.js":
/*!***************************!*\
  !*** ./src/about/edit.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




const Edit = props => {
  const {
    attributes: {
      title,
      sectionContent,
      imageOneUrl,
      imageOneAlt,
      imageTwoUrl,
      imageTwoAlt,
      subtitleOne,
      subtitleTwo,
      featuredSectionImage,
      featuredSectionImageAlt
    },
    setAttributes,
    className
  } = props;

  const onChangeTitle = newTitle => setAttributes({
    title: newTitle
  });

  const onChangeContent = newContent => setAttributes({
    sectionContent: newContent
  });

  const onSelectImageOne = newImageOne => {
    setAttributes({
      imageOneUrl: newImageOne.sizes.full.url,
      imageOneAlt: newImageOne.alt
    });
  };

  const onChangeSubtitleOne = newSubtitleOne => setAttributes({
    subtitleOne: newSubtitleOne
  });

  const onSelectImageTwo = newImageTwo => {
    setAttributes({
      imageTwoUrl: newImageTwo.sizes.full.url,
      imageTwoAlt: newImageTwo.alt
    });
  };

  const onChangeSubtitleTwo = newSubtitleTwo => setAttributes({
    subtitleTwo: newSubtitleTwo
  });

  const onSelectFeaturedSectionImage = newFeaturedSectionImage => {
    setAttributes({
      featuredSectionImage: newFeaturedSectionImage.sizes.full.url,
      featuredSectionImageAlt: newFeaturedSectionImage.alt
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container-xxl py-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row g-5 align-items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-lg-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "h-100"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h2",
    className: "display-6 mb-5",
    placeholder: "Agrega un t\xEDtulo a esta secci\xF3n",
    value: title,
    onChange: onChangeTitle
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row g-4 mb-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-sm-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "d-flex align-items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imageOneUrl,
    alt: imageOneAlt
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    type: "image",
    onSelect: onSelectImageOne,
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open,
        icon: "format-image",
        showTooltip: "true",
        label: "Seleccionar imagen"
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h5",
    className: "mb-0 subtitle-2",
    placeholder: "Caracter\xEDstica 1",
    value: subtitleOne,
    onChange: onChangeSubtitleOne
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-sm-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "d-flex align-items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imageTwoUrl,
    alt: imageTwoAlt
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    type: "image",
    onSelect: onSelectImageTwo,
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open,
        isSmall: "true",
        icon: "format-image",
        showTooltip: "true",
        label: "Seleccionar imagen"
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h5",
    className: "mb-0",
    placeholder: "Caracter\xEDstica 2",
    value: subtitleTwo,
    onChange: onChangeSubtitleTwo
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: "mb-4",
    placeholder: "Agregar el contenido de esta secci\xF3n",
    value: sectionContent,
    onChange: onChangeContent
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-lg-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "main-image img-fluid",
    src: featuredSectionImage,
    alt: featuredSectionImageAlt
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    type: "image",
    onSelect: onSelectFeaturedSectionImage,
    render: _ref3 => {
      let {
        open
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open,
        icon: "format-image",
        text: "Agregar una imagen de 630 x 550",
        className: "mt-3 btn bg-secondary text-white"
      });
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/about/index.js":
/*!****************************!*\
  !*** ./src/about/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/about/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/about/save.js");
/* harmony import */ var _img_icon_icon_09_primary_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/icon/icon-09-primary.png */ "./img/icon/icon-09-primary.png");
/* harmony import */ var _img_icon_icon_07_primary_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/icon/icon-07-primary.png */ "./img/icon/icon-07-primary.png");
/* harmony import */ var _img_about_2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/about-2.jpg */ "./img/about-2.jpg");
/**
 * WordPress dependencies
 */






 // Register the block

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)("dicom-mexico-extensions/about", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('About', 'dicom-mexico-extensions'),
  category: "dicom-blocks",
  icon: 'admin-users',
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h2',
      default: 'Título de la sección'
    },
    sectionContent: {
      type: 'string',
      source: 'html',
      selector: 'p',
      default: 'Contenido de la sección'
    },
    imageOneUrl: {
      type: 'string',
      default: _img_icon_icon_09_primary_png__WEBPACK_IMPORTED_MODULE_4__,
      selector: 'img .img1',
      attribute: 'src'
    },
    imageOneAlt: {
      type: 'string',
      default: 'Texto alternativo imagen 1',
      selector: 'img .img1',
      attribute: 'alt'
    },
    subtitleOne: {
      type: 'string',
      selector: 'h5',
      default: 'Característica 1'
    },
    imageTwoUrl: {
      type: 'string',
      default: _img_icon_icon_07_primary_png__WEBPACK_IMPORTED_MODULE_5__,
      selector: 'img'
    },
    imageTwoAlt: {
      type: 'string',
      default: 'Texto alternativo imagen 2',
      selector: 'img'
    },
    subtitleTwo: {
      type: 'string',
      selector: 'h5 .subtitle-2',
      default: 'Característica 2'
    },
    featuredSectionImage: {
      type: 'string',
      default: _img_about_2_jpg__WEBPACK_IMPORTED_MODULE_6__,
      selector: 'img.main-image',
      attribute: 'src'
    },
    featuredSectionImageAlt: {
      type: 'string',
      default: 'Texto alternativo imagen 1',
      selector: 'img.main-image',
      attribute: 'alt'
    },
    align: {
      type: 'string',
      default: 'wide'
    }
  },
  supports: {
    align: ['wide']
  },
  //Wordpress gutenberg editor
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  //Frontend result
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/about/save.js":
/*!***************************!*\
  !*** ./src/about/save.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



const Save = props => {
  const {
    attributes: {
      title,
      sectionContent,
      imageOneUrl,
      imageOneAlt,
      imageTwoUrl,
      imageTwoAlt,
      subtitleOne,
      subtitleTwo,
      featuredSectionImage,
      featuredSectionImageAlt
    }
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container-xxl py-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row g-5 align-items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-lg-6 wow fadeInUp",
    "data-wow-delay": "0.5s"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "h-100"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h2",
    className: "display-6 mb-5",
    value: title
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row g-4 mb-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-sm-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "d-flex align-items-center img1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "flex-shrink-0 me-3",
    src: imageOneUrl,
    alt: imageOneAlt
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h5",
    className: "mb-0",
    value: subtitleOne
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-sm-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "d-flex align-items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "flex-shrink-0 me-3",
    src: imageTwoUrl,
    alt: imageTwoAlt
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h5",
    className: "mb-0 subtitle-2",
    value: subtitleTwo
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    className: "mb-4",
    value: sectionContent
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-lg-6 wow fadeInUp",
    "data-wow-delay": "0.5s"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "img-fluid main-image",
    src: featuredSectionImage,
    alt: featuredSectionImageAlt
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/contact-form-cta/edit.js":
/*!**************************************!*\
  !*** ./src/contact-form-cta/edit.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




const Edit = props => {
  const {
    attributes: {
      backgroundImage,
      title,
      content,
      titleColor,
      textColor,
      inputURL,
      rightBackgroundImage,
      buttonText
    },
    setAttributes,
    className
  } = props; // Background

  const onSelectBackgroundImage = newBackgroundImage => {
    setAttributes({
      backgroundImage: newBackgroundImage.sizes.full.url
    });
  };

  const onSelectRightBackgroundImage = newRightBackgroundImage => {
    setAttributes({
      rightBackgroundImage: newRightBackgroundImage.sizes.full.url
    });
  };

  const onChangeTitle = newTitle => setAttributes({
    title: newTitle
  });

  const onChangeContent = newContent => setAttributes({
    content: newContent
  });

  const onChangeTextColor = newTextColor => setAttributes({
    textColor: newTextColor
  });

  const onChangeTitleColor = newTitleColor => setAttributes({
    titleColor: newTitleColor
  });

  const onChangeInputURL = newInputURL => setAttributes({
    inputURL: newInputURL
  });

  const onChangeButtonText = newButtonText => setAttributes({
    buttonText: newButtonText
  });

  const bgImage = {
    position: 'absolute',
    zInex: '-10',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',

    /* The image used */
    backgroundImage: `url(${backgroundImage})`,

    /* Create the parallax scrolling effect */
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    style: bgImage
  });
  const leftOverlay = {
    position: 'absolute',
    zInex: '-5',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    content: ' ',
    background: 'rgba(1,10,53,.8)'
  };
  const blockPropsOverlay = {
    style: leftOverlay
  };
  const bgRightImage = {
    position: 'absolute',
    zInex: '-10',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',

    /* The image used */
    backgroundImage: `url(${rightBackgroundImage})`,

    /* Create the parallax scrolling effect */
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };
  const blockPropsTwo = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: 'col-lg-6 quote-form',
    style: bgRightImage
  });
  const rightOverlay = {
    position: 'absolute',
    zInex: '-5',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    content: ' ',
    background: 'rgba(255,255,255,.8)'
  };
  const blockPropsRightOverlay = {
    style: rightOverlay
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: 'Color del título',
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, "Cambia el color del t\xEDtulo del bloque"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    onChange: onChangeTitleColor,
    clearable: false,
    value: titleColor
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: 'Color del texto',
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, "Cambia el color del texto del bloque"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    onChange: onChangeTextColor,
    clearable: false,
    value: textColor
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: 'Texto del botón',
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelRow, null, "Cambia el texto del CTA secci\xF3n izquierda"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: buttonText,
    onChange: onChangeButtonText
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container-fluid overflow-hidden my-5 px-lg-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container quote px-lg-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row g-0 mx-lg-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-lg-6 quote-text position-relative"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockPropsOverlay), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "position-relative h-100 px-4 px-sm-5 ps-lg-0 wow fadeIn",
    "data-wow-delay": "0.1s"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: onSelectBackgroundImage,
    value: backgroundImage,
    type: "image",
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open,
        icon: "format-image",
        showTooltip: "true",
        label: "Elegir imagen de fondo"
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h2",
    placeholder: "T\xEDtulo del bloque",
    value: title,
    onChange: onChangeTitle,
    className: "mb-4",
    style: {
      color: titleColor
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: "mb-5",
    value: content,
    onChange: onChangeContent,
    placeholder: "Redacci\xF3n del bloque",
    style: {
      color: textColor
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: inputURL,
    className: "align-self-start btn btn-primary py-3 px-5"
  }, buttonText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLInputButton, {
    onChange: onChangeInputURL,
    url: inputURL
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-lg-6 quote-form position-relative"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockPropsTwo), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockPropsRightOverlay), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "position-relative h-100 px-4 px-sm-5 pe-lg-0 wow fadeIn",
    "data-wow-delay": "0.5s"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: onSelectRightBackgroundImage,
    value: rightBackgroundImage,
    type: "image",
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open,
        icon: "format-image",
        showTooltip: "true",
        label: "Elegir imagen de fondo"
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-white p-4 p-sm-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row g-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, null)))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/contact-form-cta/index.js":
/*!***************************************!*\
  !*** ./src/contact-form-cta/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/contact-form-cta/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/contact-form-cta/save.js");
/**
 * Wordpress dependencies
 */




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('dicom-mexico-extensions/contact-form-cta', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Concact Form CTA', 'dicom-mexico-extensions'),
  category: 'dicom-blocks',
  icon: 'email',
  attributes: {
    backgroundImage: {
      type: 'string',
      selector: 'div.quote-text'
    },
    title: {
      type: 'string',
      source: 'html',
      selector: 'h2'
    },
    content: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    titleColor: {
      type: 'string',
      default: '#ffffff'
    },
    textColor: {
      type: 'string',
      default: '#ffffff'
    },
    buttonText: {
      type: 'string',
      default: 'Más información',
      selector: 'a.btn'
    },
    inputURL: {
      selector: 'a',
      type: 'string',
      source: 'attribute',
      attribute: 'href'
    },
    rightBackgroundImage: {
      type: 'string',
      selector: 'div.quote-form'
    },
    align: {
      type: 'string',
      default: 'full'
    }
  },
  supports: {
    align: ['full']
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/contact-form-cta/save.js":
/*!**************************************!*\
  !*** ./src/contact-form-cta/save.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



const Save = props => {
  const {
    attributes: {
      backgroundImage,
      title,
      content,
      titleColor,
      textColor,
      inputURL,
      rightBackgroundImage,
      buttonText
    }
  } = props; //const blockProps = useBlockProps.save()

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container-fluid overflow-hidden my-5 px-lg-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container quote px-lg-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row g-0 mx-lg-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-lg-6 quote-text",
    "data-parallax": "scroll",
    "data-image-src": backgroundImage
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "h-100 px-4 px-sm-5 ps-lg-0 wow fadeIn",
    "data-wow-delay": "0.1s"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h2",
    value: title,
    className: "mb-4",
    style: {
      color: titleColor
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    className: "mb-5",
    value: content,
    style: {
      color: textColor
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: inputURL,
    className: "align-self-start btn btn-primary py-3 px-5"
  }, buttonText))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-lg-6 quote-form",
    "data-parallax": "scroll",
    "data-image-src": rightBackgroundImage
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "h-100 px-4 px-sm-5 pe-lg-0 wow fadeIn",
    "data-wow-delay": "0.5s"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "bg-white p-4 p-sm-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row g-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/facts/edit.js":
/*!***************************!*\
  !*** ./src/facts/edit.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




const Edit = props => {
  const {
    attributes: {
      title,
      content,
      mainImage,
      mainImageAlt,
      titleOne,
      contentOne,
      icon1,
      titleTwo,
      contentTwo,
      icon2,
      titleThree,
      contentThree,
      icon3
    },
    setAttributes,
    className
  } = props; // State functions

  const onChangeTitle = newTitle => setAttributes({
    title: newTitle
  });

  const onChangeContent = newContent => setAttributes({
    content: newContent
  });

  const onSelectMainImage = newMainImage => {
    setAttributes({
      mainImage: newMainImage.sizes.full.url,
      mainImageAlt: newMainImage.alt
    });
  }; //Section 1


  const onChangeTitleOne = newTitleOne => setAttributes({
    titleOne: newTitleOne
  });

  const onChangeContentOne = newContentOne => setAttributes({
    contentOne: newContentOne
  });

  const onSelectIcon1 = newIcon1 => {
    setAttributes({
      icon1: newIcon1.sizes.full.url
    });
  }; //Section 2


  const onChangeTitleTwo = newTitleTwo => setAttributes({
    titleTwo: newTitleTwo
  });

  const onChangeContentTwo = newContentTwo => setAttributes({
    contentTwo: newContentTwo
  });

  const onSelectIcon2 = newIcon2 => {
    setAttributes({
      icon2: newIcon2.sizes.full.url
    });
  }; //Section 3


  const onChangeTitleThree = newTitleThree => setAttributes({
    titleThree: newTitleThree
  });

  const onChangeContentThree = newContentThree => setAttributes({
    contentThree: newContentThree
  });

  const onSelectIcon3 = newIcon3 => {
    setAttributes({
      icon3: newIcon3.sizes.full.url
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container-xxl py-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row g-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-lg-6 wow fadeInUp"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h2",
    className: "display-6 mb-5",
    placeholder: "Agregar t\xEDtulo a la secci\xF3n",
    value: title,
    onChange: onChangeTitle
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: "mb-5 content",
    placeholder: "Agregar descripci\xF3n de la secci\xF3n",
    value: content,
    onChange: onChangeContent
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "d-flex mb-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "d-flex flex-column"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-shrink-0 btn-square bg-primary rounded-circle icon-facts"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "img-fluid",
    src: icon1,
    alt: ""
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    type: "image",
    onSelect: onSelectIcon1,
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open,
        icon: "format-image",
        showTooltip: "true",
        label: "Seleccionar \xEDcono imagen"
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ms-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h5",
    className: "mb-3 title-one",
    placeholder: "Agrega un t\xEDtulo a este apartado",
    value: titleOne,
    onChange: onChangeTitleOne
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "span",
    className: "content-one",
    placeholder: "Descripci\xF3n secci\xF3n 1",
    value: contentOne,
    onChange: onChangeContentOne
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "d-flex mb-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "d-flex flex-column"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-shrink-0 btn-square bg-primary rounded-circle icon-facts"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "img-fluid",
    src: icon2,
    alt: ""
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    type: "image",
    onSelect: onSelectIcon2,
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open,
        icon: "format-image",
        showTooltip: "true",
        label: "Seleccionar \xEDcono imagen"
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ms-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h5",
    className: "mb-3 title-two",
    placeholder: "Agregar t\xEDtulo 2",
    value: titleTwo,
    onChange: onChangeTitleTwo
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "spam",
    className: "content-two",
    placeholder: "Agregar descripcion 2",
    value: contentTwo,
    onChange: onChangeContentTwo
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "d-flex mb-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "d-flex flex-column"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-shrink-0 btn-square bg-primary rounded-circle icon-facts"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "img-fluid",
    src: icon3,
    alt: ""
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    type: "image",
    onSelect: onSelectIcon3,
    render: _ref3 => {
      let {
        open
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open,
        icon: "format-image",
        showTooltip: "true",
        label: "Seleccionar \xEDcono imagen"
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ms-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h5",
    className: "mb-3 title-three",
    placeholder: "Agregar t\xEDtulo 3",
    value: titleThree,
    onChange: onChangeTitleThree
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "spam",
    className: "content-three",
    placeholder: "Agregar descripcion 3",
    value: contentThree,
    onChange: onChangeContentThree
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-lg-6 wow fadeInUp"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "featured-facts position-relative rounded overflow-hidden h-100"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "position-absolute w-100 h-100 featured-facts-img",
    src: mainImage,
    alt: mainImageAlt
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    type: "image",
    onSelect: onSelectMainImage,
    render: _ref4 => {
      let {
        open
      } = _ref4;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open,
        icon: "format-image",
        showTooltip: "true",
        label: "Seleccionar imagen",
        text: "Agregar una imagen de 600 x 630",
        className: "position-absolute w-100 h-100 featured-facts-img"
      });
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/facts/index.js":
/*!****************************!*\
  !*** ./src/facts/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/facts/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/facts/save.js");
/* harmony import */ var _img_feature_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/feature.jpg */ "./img/feature.jpg");
/* harmony import */ var _img_icon_icon_09_light_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/icon/icon-09-light.png */ "./img/icon/icon-09-light.png");
/**
 * Wordpress dependencies
 */





 //Register the block

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)("dicom-mexico-extensions/facts", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dicom Mexico facts', 'dicom-mexico-extensions'),
  category: "dicom-blocks",
  icon: "yes-alt",
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h2',
      default: 'Título de la sección'
    },
    content: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    mainImage: {
      type: 'string',
      default: _img_feature_jpg__WEBPACK_IMPORTED_MODULE_4__,
      selector: 'img',
      attribute: 'src'
    },
    mainImageAlt: {
      type: 'string',
      default: 'Dicom México una empresa de imageniología médica de clase mundial',
      selector: 'img .main-image',
      attribute: 'alt'
    },
    titleOne: {
      type: 'string',
      source: 'html',
      selector: 'h5.title-one'
    },
    contentOne: {
      type: 'string',
      source: 'html',
      selector: 'span.content-one'
    },
    icon1: {
      type: 'string',
      default: _img_icon_icon_09_light_png__WEBPACK_IMPORTED_MODULE_5__
    },
    titleTwo: {
      type: 'string',
      source: 'html',
      selector: 'h5.title-two'
    },
    contentTwo: {
      type: 'string',
      source: 'html',
      selector: 'span.content-two'
    },
    icon2: {
      type: 'string',
      default: _img_icon_icon_09_light_png__WEBPACK_IMPORTED_MODULE_5__
    },
    titleThree: {
      type: 'string',
      source: 'html',
      selector: 'h5.title-three'
    },
    contentThree: {
      type: 'string',
      source: 'html',
      selector: 'span.content-three'
    },
    icon3: {
      type: 'string',
      default: _img_icon_icon_09_light_png__WEBPACK_IMPORTED_MODULE_5__
    },
    align: {
      type: 'string',
      default: 'wide'
    }
  },
  supports: {
    align: ['wide']
  },
  //Wordpress gutenberg editor
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  //Frontend result
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/facts/save.js":
/*!***************************!*\
  !*** ./src/facts/save.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);




const Save = props => {
  const iconClass = {
    width: '90px',
    height: '90px'
  };
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    style: iconClass
  });
  const {
    attributes: {
      title,
      content,
      mainImage,
      mainImageAlt,
      titleOne,
      contentOne,
      icon1,
      titleTwo,
      contentTwo,
      icon2,
      titleThree,
      contentThree,
      icon3
    }
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "container-xxl py-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "row g-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col-lg-6 wow fadeInUp"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h2",
    className: "display-6 mb-5",
    value: title
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    className: "mb-5 content",
    value: content
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "d-flex mb-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "d-flex flex-column"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
    className: "flex-shrink-0 btn-square bg-primary rounded-circle icon-facts"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "img-fluid",
    src: icon1,
    alt: ""
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "ms-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h5",
    className: "mb-3 title-one",
    value: titleOne
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "span",
    className: "content-one",
    value: contentOne
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "d-flex mb-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "d-flex flex-column"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
    className: "flex-shrink-0 btn-square bg-primary rounded-circle icon-facts"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "img-fluid",
    src: icon2,
    alt: ""
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "ms-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h5",
    className: "mb-3 title-two",
    value: titleTwo
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "span",
    className: "content-two",
    value: contentTwo
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "d-flex mb-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "d-flex flex-column"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
    className: "flex-shrink-0 btn-square bg-primary rounded-circle icon-facts"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "img-fluid",
    src: icon3,
    alt: ""
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "ms-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h5",
    className: "mb-3 title-three",
    value: titleThree
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "span",
    className: "content-three",
    value: contentThree
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col-lg-6 wow fadeInUp"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "featured-facts position-relative rounded overflow-hidden h-100"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "position-absolute w-100 h-100 featured-facts-img",
    src: mainImage,
    alt: mainImageAlt
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/insights/edit.js":
/*!******************************!*\
  !*** ./src/insights/edit.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




const Edit = props => {
  const {
    attributes: {
      image,
      insightNumberOne,
      insightTitleOne,
      insightNumberTwo,
      insightTitleTwo,
      insightNumberThree,
      insightTitleThree,
      insightNumberFour,
      insightTitleFour
    },
    setAttributes,
    className
  } = props; // Insight 1

  const onChangeInsightNumberOne = newInsightNumberOne => {
    setAttributes({
      insightNumberOne: newInsightNumberOne
    });
  };

  const onChangeInsightTitleOne = newInsightTitleOne => {
    setAttributes({
      insightTitleOne: newInsightTitleOne
    });
  }; // Insight 2


  const onChangeInsightNumberTwo = newInsightNumberTwo => {
    setAttributes({
      insightNumberTwo: newInsightNumberTwo
    });
  };

  const onChangeInsightTitleTwo = newInsightTitleTwo => {
    setAttributes({
      insightTitleTwo: newInsightTitleTwo
    });
  }; // Insight 3


  const onChangeInsightNumberThree = newInsightNumberThree => {
    setAttributes({
      insightNumberThree: newInsightNumberThree
    });
  };

  const onChangeInsightTitleThree = newInsightTitleThree => {
    setAttributes({
      insightTitleThree: newInsightTitleThree
    });
  }; // Insight 4


  const onChangeInsightNumberFour = newInsightNumberFour => {
    setAttributes({
      insightNumberFour: newInsightNumberFour
    });
  };

  const onChangeInsightTitleFour = newInsightTitleFour => {
    setAttributes({
      insightTitleFour: newInsightTitleFour
    });
  }; // BackgroundImage


  const onSelectImage = newImage => {
    setAttributes({
      image: newImage.sizes.full.url
    });
  };

  const parallax = {
    position: 'absolute',
    zInex: '-10',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',

    /* The image used */
    backgroundImage: `url(${image})`,

    /* Create the parallax scrolling effect */
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };
  const overlay = {
    position: 'absolute',
    zInex: '-5',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(1, 10, 53, .8)'
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    style: parallax
  });
  const blockPropsOverlay = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    style: overlay
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container-fluid facts my-5 py-5 position-relative"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockPropsOverlay), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container py-5 position-relative"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: onSelectImage,
    type: "image",
    value: image,
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open,
        icon: "format-image",
        showTooltip: "true",
        label: "Elegir imagen de fondo",
        text: "Elegir imagen de fondo",
        type: "tertiary",
        className: "btn btn-primary"
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row g-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-sm-6 col-lg-3 wow fadeIn text-center",
    "data-wow-delay": "0.1s"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h3",
    className: "display-4 text-white insight-number-one",
    value: insightNumberOne,
    onChange: onChangeInsightNumberOne
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "span",
    className: "text-primary insight-title-one",
    value: insightTitleOne,
    onChange: onChangeInsightTitleOne
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-sm-6 col-lg-3 wow fadeIn text-center",
    "data-wow-delay": "0.3s"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h3",
    className: "display-4 text-white insight-number-two",
    value: insightNumberTwo,
    onChange: onChangeInsightNumberTwo
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "span",
    className: "text-primary insight-title-two",
    value: insightTitleTwo,
    onChange: onChangeInsightTitleTwo
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-sm-6 col-lg-3 wow fadeIn text-center",
    "data-wow-delay": "0.5s"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h3",
    className: "display-4 text-white insight-number-three",
    value: insightNumberThree,
    onChange: onChangeInsightNumberThree
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "span",
    className: "text-primary insight-title-three",
    value: insightTitleThree,
    onChange: onChangeInsightTitleThree
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-sm-6 col-lg-3 wow fadeIn text-center",
    "data-wow-delay": "0.7s"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h3",
    className: "display-4 text-white insight-number-four",
    value: insightNumberFour,
    onChange: onChangeInsightNumberFour
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "span",
    className: "text-primary insight-title-four",
    value: insightTitleFour,
    onChange: onChangeInsightTitleFour
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/insights/index.js":
/*!*******************************!*\
  !*** ./src/insights/index.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/insights/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/insights/save.js");
/* harmony import */ var _img_carousel_1_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/carousel-1.jpg */ "./img/carousel-1.jpg");
/**
 * Wordpress dependencies
 */




 // Register Block

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)("dicom-mexico-extensions/insights", {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Insights', 'dicom-mexico-extensions'),
  category: 'dicom-blocks',
  icon: 'star-filled',
  attributes: {
    image: {
      type: 'string',
      selector: 'div.facts'
    },
    insightNumberOne: {
      type: 'string',
      source: 'html',
      selector: 'h3.insight-number-one',
      default: '1234'
    },
    insightTitleOne: {
      type: 'string',
      source: 'html',
      selector: 'span.insight-title-one',
      default: 'Happy clients'
    },
    insightNumberTwo: {
      type: 'string',
      source: 'html',
      selector: 'h3.insight-number-two',
      default: '1234'
    },
    insightTitleTwo: {
      type: 'string',
      source: 'html',
      selector: 'span.insight-title-two',
      default: 'Happy clients'
    },
    insightNumberThree: {
      type: 'string',
      source: 'html',
      selector: 'h3.insight-number-three',
      default: '1234'
    },
    insightTitleThree: {
      type: 'string',
      source: 'html',
      selector: 'span.insight-title-three',
      default: 'Happy clients'
    },
    insightNumberFour: {
      type: 'string',
      source: 'html',
      selector: 'h3.insight-number-four',
      default: '1234'
    },
    insightTitleFour: {
      type: 'string',
      source: 'html',
      selector: 'span.insight-title-four',
      default: 'Happy clients'
    },
    align: {
      type: 'string',
      default: 'full'
    }
  },
  supports: {
    align: ['full']
  },
  // Wordpress gutenberg editor
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  // Frontend result
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/insights/save.js":
/*!******************************!*\
  !*** ./src/insights/save.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



const Save = props => {
  const {
    attributes: {
      image,
      insightNumberOne,
      insightTitleOne,
      insightNumberTwo,
      insightTitleTwo,
      insightNumberThree,
      insightTitleThree,
      insightNumberFour,
      insightTitleFour
    }
  } = props;
  const parallax = {
    /* The image used */
    backgroundImage: `url(${image})`,

    /* Create the parallax scrolling effect */
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    style: parallax
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container-fluid facts my-5 py-5",
    "data-parallax": "scroll",
    "data-image-src": image
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container py-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row g-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-sm-6 col-lg-3 wow fadeIn text-center",
    "data-wow-delay": "0.1s"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "display-4 text-white insight-number-one",
    "data-toggle": "counter-up"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    value: insightNumberOne
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "span",
    className: "text-primary insight-title-one",
    value: insightTitleOne
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-sm-6 col-lg-3 wow fadeIn text-center",
    "data-wow-delay": "0.3s"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h3",
    className: "display-4 text-white insight-number-two",
    "data-toggle": "counter-up",
    value: insightNumberTwo
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "span",
    className: "text-primary insight-title-two",
    value: insightTitleTwo
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-sm-6 col-lg-3 wow fadeIn text-center",
    "data-wow-delay": "0.5s"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h3",
    className: "display-4 text-white insight-number-three",
    "data-toggle": "counter-up",
    value: insightNumberThree
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "span",
    className: "text-primary insight-title-three",
    value: insightTitleThree
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-sm-6 col-lg-3 wow fadeIn text-center",
    "data-wow-delay": "0.7s"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h3",
    className: "display-4 text-white insight-number-four",
    "data-toggle": "counter-up",
    value: insightNumberFour
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "span",
    className: "text-primary insight-title-four",
    value: insightTitleFour
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/left-content/edit.js":
/*!**********************************!*\
  !*** ./src/left-content/edit.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




const Edit = props => {
  const {
    attributes: {
      title,
      content,
      imageUrl,
      imageAlt
    },
    setAttributes,
    className
  } = props;

  const onChangeTitle = newTitle => setAttributes({
    title: newTitle
  });

  const onChangeContent = newContent => setAttributes({
    content: newContent
  });

  const onSelectImage = newImage => {
    setAttributes({
      imageUrl: newImage.sizes.full.url,
      imageAlt: newImage.alt
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container-xxl py-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row g-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h2",
    className: "display-6 mb-5 text-center dm-title",
    placeholder: "T\xEDtulo del apartado",
    value: title,
    onChange: onChangeTitle
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-lg-6 order-md-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "img-fliud",
    src: imageUrl,
    alt: imageAlt
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    type: "image",
    onSelect: onSelectImage,
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open,
        icon: "format-image",
        showTooltip: "true",
        label: "Seleccionar imagen"
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-lg-6 d-flex flex-column justify-content-center order-md-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: "mb-4",
    placeholder: "Agrega una breve descripci\xF3n",
    value: content,
    onChange: onChangeContent
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/left-content/index.js":
/*!***********************************!*\
  !*** ./src/left-content/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/left-content/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/left-content/save.js");
/**
 * Wordpress dependencies
 */




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('dicom-mexico-extensions/left-content', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left Content', 'dicom-mexico-extensions'),
  category: 'dicom-blocks',
  icon: 'media-text',
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h2'
    },
    content: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    imageUrl: {
      type: 'string',
      selector: 'img',
      attribute: 'src'
    },
    imageAlt: {
      type: 'string',
      selector: 'img',
      attribute: 'alt'
    },
    align: {
      type: 'string',
      default: 'wide'
    }
  },
  supports: {
    align: ['wide']
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/left-content/save.js":
/*!**********************************!*\
  !*** ./src/left-content/save.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



const Save = props => {
  const justifyFlexColumnContentCenter = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    style: justifyFlexColumnContentCenter
  });
  const {
    attributes: {
      title,
      content,
      imageUrl,
      imageAlt
    },
    setAttributes,
    className
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container-xxl py-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row g-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h2",
    className: "display-6 mb-5 text-center dm-title",
    value: title
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-lg-6 wow fadeIn order-md-2",
    "data-wow-delay": "0.5s"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "img-fliud",
    src: imageUrl,
    alt: imageAlt
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-lg-6 d-flex flex-column justify-content-center wow fadeIn order-md-1",
    "data-wow-delay": "0.1s"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    className: "mb-4",
    value: content
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/right-content/edit.js":
/*!***********************************!*\
  !*** ./src/right-content/edit.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




const Edit = props => {
  const {
    attributes: {
      title,
      content,
      imageUrl,
      imageAlt
    },
    setAttributes,
    className
  } = props;

  const onChangeTitle = newTitle => setAttributes({
    title: newTitle
  });

  const onChangeContent = newContent => setAttributes({
    content: newContent
  });

  const onSelectImage = newImage => {
    setAttributes({
      imageUrl: newImage.sizes.full.url,
      imageAlt: newImage.alt
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container-xxl py-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row g-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h2",
    className: "display-6 mb-5 text-center dm-title",
    placeholder: "T\xEDtulo del apartado",
    value: title,
    onChange: onChangeTitle
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-lg-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "img-fliud",
    src: imageUrl,
    alt: imageAlt
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    type: "image",
    onSelect: onSelectImage,
    render: _ref => {
      let {
        open
      } = _ref;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        onClick: open,
        icon: "format-image",
        showTooltip: "true",
        label: "Seleccionar imagen"
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-lg-6 d-flex flex-column justify-content-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    className: "mb-4",
    placeholder: "Agrega una breve descripci\xF3n",
    value: content,
    onChange: onChangeContent
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/right-content/index.js":
/*!************************************!*\
  !*** ./src/right-content/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/right-content/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/right-content/save.js");
/**
 * Wordpress dependencies
 */




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('dicom-mexico-extensions/right-content', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right Content', 'dicom-mexico-extensions'),
  category: 'dicom-blocks',
  icon: 'media-text',
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h2'
    },
    content: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    imageUrl: {
      type: 'string',
      selector: 'img',
      attribute: 'src'
    },
    imageAlt: {
      type: 'string',
      selector: 'img',
      attribute: 'alt'
    },
    align: {
      type: 'string',
      default: 'wide'
    }
  },
  supports: {
    align: ['wide']
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/right-content/save.js":
/*!***********************************!*\
  !*** ./src/right-content/save.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);



const Save = props => {
  const justifyFlexColumnContentCenter = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    style: justifyFlexColumnContentCenter
  });
  const {
    attributes: {
      title,
      content,
      imageUrl,
      imageAlt
    },
    setAttributes,
    className
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container-xxl py-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row g-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h2",
    className: "display-6 mb-5 text-center dm-title",
    value: title
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-lg-6 wow fadeIn",
    "data-wow-delay": "0.1s"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "img-fliud",
    src: imageUrl,
    alt: imageAlt
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-lg-6 d-flex flex-column justify-content-center",
    "data-wow-delay": "0.5s"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    className: "mb-4",
    value: content
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./img/about-2.jpg":
/*!*************************!*\
  !*** ./img/about-2.jpg ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/about-2.77ff6211.jpg";

/***/ }),

/***/ "./img/carousel-1.jpg":
/*!****************************!*\
  !*** ./img/carousel-1.jpg ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/carousel-1.d56cd68c.jpg";

/***/ }),

/***/ "./img/feature.jpg":
/*!*************************!*\
  !*** ./img/feature.jpg ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/feature.af27b401.jpg";

/***/ }),

/***/ "./img/icon/icon-07-primary.png":
/*!**************************************!*\
  !*** ./img/icon/icon-07-primary.png ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/icon-07-primary.9bb6955c.png";

/***/ }),

/***/ "./img/icon/icon-09-light.png":
/*!************************************!*\
  !*** ./img/icon/icon-09-light.png ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/icon-09-light.35eca4e0.png";

/***/ }),

/***/ "./img/icon/icon-09-primary.png":
/*!**************************************!*\
  !*** ./img/icon/icon-09-primary.png ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/icon-09-primary.aaecc31a.png";

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about/index.js */ "./src/about/index.js");
/* harmony import */ var _facts_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./facts/index.js */ "./src/facts/index.js");
/* harmony import */ var _insights_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insights/index.js */ "./src/insights/index.js");
/* harmony import */ var _right_content_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./right-content/index.js */ "./src/right-content/index.js");
/* harmony import */ var _left_content_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./left-content/index.js */ "./src/left-content/index.js");
/* harmony import */ var _contact_form_cta_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-form-cta/index.js */ "./src/contact-form-cta/index.js");






}();
/******/ })()
;
//# sourceMappingURL=index.js.map