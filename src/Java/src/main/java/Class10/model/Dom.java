package Class10.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Class10.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Дом
 */
@Entity(name = "IISClass10Дом")
@Table(schema = "public", name = "Дом")
public class Dom {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерДома")
    private Integer номердома;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Ulica")
    @Convert("Ulica")
    @Column(name = "Улица", length = 16, unique = true, nullable = false)
    private UUID _ulicaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Ulica", insertable = false, updatable = false)
    private Ulica ulica;


    public Dom() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерДома() {
      return номердома;
    }

    public void setНомерДома(Integer номердома) {
      this.номердома = номердома;
    }


}