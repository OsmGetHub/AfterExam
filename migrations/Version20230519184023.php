<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230519184023 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE emploi ADD fk_entreprise_id INT NOT NULL');
        $this->addSql('ALTER TABLE emploi ADD CONSTRAINT FK_74A0B0FAC0E4DA28 FOREIGN KEY (fk_entreprise_id) REFERENCES entreprise (id)');
        $this->addSql('CREATE INDEX IDX_74A0B0FAC0E4DA28 ON emploi (fk_entreprise_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE emploi DROP FOREIGN KEY FK_74A0B0FAC0E4DA28');
        $this->addSql('DROP INDEX IDX_74A0B0FAC0E4DA28 ON emploi');
        $this->addSql('ALTER TABLE emploi DROP fk_entreprise_id');
    }
}
