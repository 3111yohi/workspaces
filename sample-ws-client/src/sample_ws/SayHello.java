
package sample_ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>sayHello complex type��Java�N���X�B
 * 
 * <p>���̃X�L�[�}�E�t���O�����g�́A���̃N���X���Ɋ܂܂��\�������R���e���c���w�肵�܂��B
 * 
 * <pre>
 * &lt;complexType name="sayHello"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="name" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "sayHello", propOrder = {
    "name"
})
public class SayHello {

    protected String name;

    /**
     * name�v���p�e�B�̒l���擾���܂��B
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getName() {
        return name;
    }

    /**
     * name�v���p�e�B�̒l��ݒ肵�܂��B
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setName(String value) {
        this.name = value;
    }

}
