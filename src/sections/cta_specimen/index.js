import React from 'react';
import classnames from 'classnames';
import OiType from '../../components/oi_type';
import style from './style.css';

class CtaSpecimen extends React.PureComponent {

  state ={
    hover : false
  }

  setHoverState = (value) => {
    this.setState({hover: value})
  }

  render() {

    const theme = {
      oi: style.oi,
      you: style.you,
      mate: style.mate,
    };

    const { hover } = this.state;
    const arrow_left_classes = classnames([style.oi_arrow, style.oi_arrow_left, {
      [style.left_hover]: hover
    }]);
    const arrow_right_classes = classnames([style.oi_arrow, style.oi_arrow_right, {
      [style.right_hover]: hover
    }]);

    return (
      <section className={style.oi_page}>
        <a href={"https://www.dropbox.com/s/cywkpje67uitk45/Oi%20Specimen.pdf"} target={"new"} className={style.cta_button} onMouseEnter={() => this.setHoverState(true)} onMouseLeave={() => this.setHoverState(false)}>
          <OiType caps className={style.oi_copy} theme={theme}>{"See the\n specimen"}</OiType>
          <OiType dlig className={arrow_left_classes}>{"<–––––––"}</OiType>
          <OiType dlig className={arrow_right_classes}>{"<–––––––"}</OiType>
        </a>
      </section>
    );
  }
}

export default CtaSpecimen;
